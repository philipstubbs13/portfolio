'use server';

import { db } from '@/lib/db';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormResult {
  data?: ContactFormData;
  error?: string;
}

async function submitContactForm(formData: FormData): Promise<ContactFormResult> {
  const nameValue = formData.get('name');
  const emailValue = formData.get('email');
  const messageValue = formData.get('message');

  if (!nameValue) {
    return { error: 'Name is required.' };
  }

  if (!emailValue) {
    return { error: 'Email is required.' };
  }

  if (!messageValue) {
    return { error: 'Message is required.' };
  }

  const name: string = nameValue.toString();
  const email: string = emailValue.toString();
  const message: string = messageValue.toString();

  try {
    const data: ContactFormData = { name, email, message };

    await db.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return { data };
  } catch (error) {
    return { error: 'Error submitting contact form. Please try again.' };
  }
}

export default submitContactForm;

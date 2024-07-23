import { ContactForm } from '@/components/contact-form/ContactForm';
import Image from 'next/image';

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <Image
            src="/contact-image.jpg"
            width="550"
            height="550"
            alt="Contact"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
        <div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-muted-foreground md:text-xl">
              I&apos;d love to hear from you! Feel free to reach out with any questions, comments,
              or opportunities.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

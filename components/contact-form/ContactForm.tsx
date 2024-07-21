'use client';

import submitContactForm from '@/app/actions/submitContactForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const submitAction = async (formData: FormData) => {
    const { error } = await submitContactForm(formData);

    if (error) {
      console.error(error);
      toast({
        title: error,
        variant: 'destructive',
      });

      return;
    }

    toast({
      title: 'Thank you for contacting me.',
      description: 'Your email has been sent and will be answered as soon as possible.',
    });
    formRef.current?.reset();
  };

  return (
    <form className="space-y-4" action={submitAction} ref={formRef}>
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
          Name
        </Label>
        <Input id="name" name="name" type="text" className="w-full" />
      </div>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
          Email
        </Label>
        <Input id="email" name="email" type="email" className="w-full" />
      </div>
      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
          Message
        </Label>
        <Textarea id="message" name="message" className="w-full min-h-[120px]" />
      </div>
      <Button
        variant="outline"
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        Send Message
      </Button>
    </form>
  );
};

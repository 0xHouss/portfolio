"use client";

import { submitContactForm } from "@/actions/contact";
import { ErrorMessage } from "@/components/error-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormReset } from "@/hooks/use-form-reset";
import { useToastMessage } from "@/hooks/use-toast-message";
import { EMPTY_FORM_STATE } from "@/lib/form-state";
import { useActionState } from "react";

export default function Contact() {
  const [formState, submit] = useActionState(submitContactForm, EMPTY_FORM_STATE);

  useFormReset(formState);
  useToastMessage(formState);

  return (
    <section id="contact" className="max-w-5xl px-6 lg:px-0 m-auto py-20 grid lg:grid-cols-2 gap-10 lg:gap-20">
      <div>
        <h1 className="text-6xl font-semibold text-primary">Reach Out</h1>
        <h2 className="text-3xl mt-2 font-medium">Have a project in mind? Let’s make it happen.</h2>
        <p className="text-muted-foreground mt-4 text-lg">Whether you’re building a new product, need a developer you can rely on, or just want to discuss an idea — I’d love to hear from you.</p>
      </div>
      <form className="flex flex-col gap-5" action={submit}>
        <div className="flex gap-4">
          <div className="flex-1 space-y-1">
            <Label htmlFor="name" className="text-lg">Name</Label>
            <Input id="name" name="name" placeholder="What's your name?" className="bg-background placeholder:text-sm" defaultValue={!formState.reset && formState.formData.get('name')?.toString() || ''} />
            <ErrorMessage errors={formState.fieldErrors.name} />
          </div>
          <div className="flex-1 space-y-1">
            <Label htmlFor="email" className="text-lg">Email</Label>
            <Input id="email" name="email" type="email" placeholder="How can I reach you?" className="bg-background placeholder:text-sm" defaultValue={!formState.reset && formState.formData.get('email')?.toString() || ''} />
            <ErrorMessage errors={formState.fieldErrors.email} />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="subject" className="text-lg">Subject</Label>
          <Input id="subject" name="subject" placeholder="What do you want to discuss?" className="bg-background placeholder:text-sm" defaultValue={!formState.reset && formState.formData.get('subject')?.toString() || ''} />
          <ErrorMessage errors={formState.fieldErrors.subject} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="message" className="text-lg">Message</Label>
          <Textarea id="message" name="message" placeholder="Explain your idea..." className="bg-background placeholder:text-sm" defaultValue={!formState.reset && formState.formData.get('message')?.toString() || ''} />
          <ErrorMessage errors={formState.fieldErrors.message} />
        </div>

        <Button type="submit" variant={"outline"} className="mt-4 w-fit self-start bg-primary hover:bg-primary/90 transition-colors">
          Submit !
        </Button>
      </form>
    </section>
  )
}

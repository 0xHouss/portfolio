"use server";

import { FormState, fromErrorToFormState, toFormState } from "@/lib/form-state";
import { z } from "zod";

const submitContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name must be at most 100 characters long." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  subject: z
    .string()
    .min(1, { message: "Subject is required." })
    .max(200, { message: "Subject must be at most 200 characters long." }),
  message: z
    .string()
    .min(1, { message: "Message is required." })
    .max(1000, { message: "Message must be at most 1000 characters long." }),
});

export async function submitContactForm(state: FormState, formData: FormData) {
  try {
    const { name, email, subject, message } = submitContactFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!process.env.DISCORD_WEBHOOK_URL) {
      throw new Error("Discord webhook URL is not set.");
    }

    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "New Contact Form Submission",
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Email", value: email, inline: true },
              { name: "Subject", value: subject, inline: false },
              { name: "Message", value: message, inline: false },
            ],
            color: 0xD64045,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return toFormState("SUCCESS", formData, {
      toast: {
        title: "Message sent successfully !",
        description: "I will get back to you as soon as possible.",
      },
      reset: true,
    });
  } catch (error) {
    return fromErrorToFormState(error, formData);
  }
}

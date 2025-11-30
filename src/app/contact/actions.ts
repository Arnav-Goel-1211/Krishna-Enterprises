"use server";

import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.EMAIL_TO;

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function sendContactEmail(values: z.infer<typeof formSchema>) {
  if (!emailTo) {
    console.error("EMAIL_TO environment variable is not set.");
    return { success: false, error: "Server configuration error." };
  }
  
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set.");
    return { success: false, error: "Server configuration error." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // This must be a verified domain on Resend.
      to: emailTo,
      reply_to: values.email,
      subject: `New contact form submission: ${values.subject}`,
      html: `
        <h1>New Message from Lorikeet Inks Contact Form</h1>
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Subject:</strong> ${values.subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${values.message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send email." };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

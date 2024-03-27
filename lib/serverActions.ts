"use server";

import { Resend } from "resend";
import { EmailTemplate } from "../components/EmailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (values: {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  message: string;
}) => {
  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "piotr+baben@softainable.de",
    reply_to: `${values.firstName} ${values.lastName} <${values.email}>`,
    subject: "Hello world",
    react: EmailTemplate({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      company: values.company,
      phone: values.phone,
      message: values.message,
    }),
    text: "",
  });
};

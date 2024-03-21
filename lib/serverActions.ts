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
  formular: string;
  werben: string;
  rechnungen: string;
  standort: string;
  sonstiges: string;
  outOfHome: string;
  webDev: string;
  markComun: string;
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
      outOfHome: values.outOfHome,
      webDev: values.webDev,
      markComun: values.markComun,
      werben: values.werben,
      rechnungen: values.rechnungen,
      standort: values.standort,
      formular: values.formular,
      sonstiges: values.sonstiges,
    }),
    text: "",
  });
};

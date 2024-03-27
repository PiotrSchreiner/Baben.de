import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  company,
  email,
  phone,
  message,
}) => (
  <div className="bg-black/50 p-20">
    <div className="max-w-2xl mx-auto bg-black/50 rounded-lg">
      <div className="bg-gradient-to-tr from-pink-800 via-pink-500 to-pink-300 w-full h-full p-4 rounded-t-lg mb-4">
        <h1 className="text-3xl font-bold text-blue-600">Moin, Pierro </h1>
      </div>
      <div className="p-4">
        <h2 className="text-xl mb-4 font-bold text-green-600">
          Kontaktformular
        </h2>
        <p className="text-lg mb-4 px-4">{message}</p>

        <h3 className="text-lg mb-4">
          {firstName} {lastName} <br />
          {email} <br />
          Tel: {phone} <br />
          {company} <br />
        </h3>
      </div>
    </div>
  </div>
);

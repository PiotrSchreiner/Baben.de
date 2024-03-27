// RootLayout.tsx
import Footer from "@/components/Footer";
import HeaderAlternative from "@/components/HeaderAlternative";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import "./globals.css";

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <meta
        className="sr-only"
        name="babenwerbung"
        content="Baben Werbung"
      ></meta>
      <head>
        <title>BABEN WERBUNG</title>
      </head>
      <body>
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="min-h-screen relative bg-black/60">
          <NextIntlClientProvider messages={messages} locale={locale}>
            <HeaderAlternative locale={locale} />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}

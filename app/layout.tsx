import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Waya Care — Compassionate Home Care in the Greater Toronto Area",
  description: "Personalized home care services for seniors and families across the Greater Toronto Area. Personal care, companionship, dementia support, and more.",
  keywords: "home care GTA, senior care Greater Toronto Area, dementia care, respite care, personal care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

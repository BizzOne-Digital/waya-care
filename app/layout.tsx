import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Waya Care — Compassionate Home Care in Milton, Ontario",
  description: "Personalized home care services for seniors and families in Milton, Oakville, Burlington, and the Halton Region. Personal care, companionship, dementia support, and more.",
  keywords: "home care Milton Ontario, senior care Halton Region, dementia care, respite care, personal care",
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

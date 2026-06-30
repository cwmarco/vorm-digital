import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "vorm.digital | Digitales Marketing aus einer Hand",
  description:
    "VORM.DIGITAL — Berliner Marketing-Agentur für SEO, Websites, Paid Media und Reporting. Ganzheitliche digitale Lösungen aus einer Hand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className={`${fraunces.variable} ${outfit.variable} font-serif antialiased h-full`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { headers } from "next/headers";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = (await headers()).get("x-page-lang") ?? "de";

  return (
    <html lang={lang} className="h-full">
      <body className={`${fraunces.variable} ${outfit.variable} font-serif antialiased h-full`}>
        {children}
      </body>
    </html>
  );
}

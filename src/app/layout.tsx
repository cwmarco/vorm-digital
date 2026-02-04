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
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "vorm.digital | Coming Soon",
  description: "Digital experiences, crafted with precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${fraunces.variable} ${outfit.variable} font-serif antialiased h-full`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Allison, Instrument_Sans, Lustria } from "next/font/google";
import "./marco.css";

const lustria = Lustria({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lustria",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const allison = Allison({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allison",
});

export default function MarcoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${lustria.variable} ${instrumentSans.variable} ${allison.variable} marco-page min-h-screen bg-white text-[#3B3B3B] font-[family-name:var(--font-instrument)]`}
    >
      {children}
    </div>
  );
}

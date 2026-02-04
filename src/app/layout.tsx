import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased h-full">
        {children}
      </body>
    </html>
  );
}

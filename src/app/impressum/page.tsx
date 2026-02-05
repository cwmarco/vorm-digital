import { Metadata } from "next";
import { LiquidGradient } from "@/components/ui/liquid-gradient";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | vorm.digital",
  robots: {
    index: false,
    follow: false,
  },
};

// SVG email to prevent scraping
function EmailSVG() {
  return (
    <svg
      width="115"
      height="14"
      viewBox="0 0 115 14"
      className="inline align-middle"
      aria-label="hallo at vorm dot digital"
    >
      <text
        x="0"
        y="11"
        fill="currentColor"
        fontSize="13"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        hallo@vorm.digital
      </text>
    </svg>
  );
}

export default function Impressum() {
  return (
    <main className="w-screen min-h-screen">
      <LiquidGradient className="w-full min-h-screen">
        <div className="flex flex-col justify-center min-h-screen px-8 py-16 font-[family-name:var(--font-fraunces)]">
          <div className="text-[#3D5A56]/60 text-sm space-y-1 max-w-md mx-auto">
            <p className="text-[#1A2E35] font-medium mb-4">VORM.DIGITAL</p>
            <p>Inhaber: Marco Günder</p>
            <p>Dänenstraße 8</p>
            <p>10436 Berlin</p>
            <p>Deutschland</p>
            <p className="pt-4">
              E-Mail: <EmailSVG />
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Link
              href="/"
              className="mt-12 block text-xs text-[#3D5A56]/40 hover:text-[#3D5A56] transition-colors"
            >
              ← Zurück
            </Link>
          </div>
        </div>
      </LiquidGradient>
    </main>
  );
}

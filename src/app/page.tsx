import { LiquidGradient } from "@/components/ui/liquid-gradient";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <LiquidGradient className="w-full h-full">
        <div className="flex flex-col items-center justify-center h-full px-8 text-center font-[family-name:var(--font-fraunces)]">
          <div className="flex items-center gap-[8px] mb-12">
            <Image
              src="/logo.svg"
              alt="vorm.digital"
              width={44}
              height={44}
              className="-translate-y-[4px]"
            />
            <span className="text-[36px] tracking-[-0.01em] text-[#1A2E35] font-[family-name:var(--font-fraunces)]">Vorm</span>
          </div>
          <h1 className="text-4xl md:text-6xl tracking-tight mb-2 text-[#1A2E35]">
            Sie führen Ihr Business.
          </h1>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-8 text-[#1A2E35] italic">
            Wir übernehmen Ihr Marketing.
          </h2>
          <p className="text-lg md:text-xl text-[#2C4A52] mb-6 max-w-lg">
            Ganzheitliche digitale Lösungen aus einer Hand.
          </p>
          <p className="text-base md:text-lg text-[#1A2E35] mb-12">
            <strong>Bezahlbar.</strong> <strong>Fortschrittlich.</strong> <strong>Exklusiv.</strong>
          </p>
          <p className="text-sm text-[#3D5A56]/60">
            <a
              href="https://cal.com/marco-ennmyq/site-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3D5A56] hover:text-[#1A2E35] transition-colors"
            >
              Termin vereinbaren →
            </a>
          </p>

          <footer className="absolute bottom-8 left-0 right-0 text-center text-xs text-[#3D5A56]/40 space-y-1">
            <p>© {new Date().getFullYear()} VORM.DIGITAL</p>
            <p>
              <a href="/impressum" className="hover:text-[#3D5A56] transition-colors">
                Impressum
              </a>
            </p>
          </footer>
        </div>
      </LiquidGradient>
    </main>
  );
}

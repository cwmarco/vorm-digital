import { LiquidGradient } from "@/components/ui/liquid-gradient";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <LiquidGradient className="w-full h-full">
        <div className="flex flex-col items-center justify-center h-full px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
            vorm<span className="text-indigo-400">.digital</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light mb-12 max-w-md">
            Digital experiences, crafted with precision
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Something new is coming
          </div>
          <p className="mt-12 text-sm text-zinc-500">
            Get in touch —{" "}
            <a
              href="mailto:hello@vorm.digital"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              hello@vorm.digital
            </a>
          </p>
        </div>
      </LiquidGradient>
    </main>
  );
}

"use client";

import { marcoLocales, useMarcoLocale } from "@/components/marco/marco-locale-provider";

export function MarcoLanguageFlags({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useMarcoLocale();

  return (
    <div
      className={`flex items-center gap-2.5 text-xs ${className}`}
      role="group"
      aria-label="Language"
    >
      {marcoLocales.map(({ code, label }, index) => {
        const active = locale === code;
        return (
          <span key={code} className="inline-flex items-center gap-2.5">
            {index > 0 && (
              <span className="text-[#3B3B3B]/20 select-none" aria-hidden>
                ·
              </span>
            )}
            <button
              type="button"
              onClick={() => setLocale(code)}
              aria-label={label}
              aria-pressed={active}
              className={`uppercase tracking-[0.08em] transition-colors ${
                active
                  ? "text-[#3B3B3B]"
                  : "text-[#3B3B3B]/40 hover:text-[#3B3B3B]/70"
              }`}
            >
              {code}
            </button>
          </span>
        );
      })}
    </div>
  );
}

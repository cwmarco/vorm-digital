"use client";

import { marcoLocales, useMarcoLocale } from "@/components/marco/marco-locale-provider";

export function MarcoLanguageFlags({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useMarcoLocale();

  return (
    <div className={`flex items-center gap-1.5 ${className}`} role="group" aria-label="Language">
      {marcoLocales.map(({ code, flag, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-label={label}
            aria-pressed={active}
            className={`text-[15px] leading-none rounded-md px-1 py-0.5 transition-all ${
              active
                ? "opacity-100 scale-110"
                : "opacity-35 hover:opacity-70 hover:scale-105"
            }`}
          >
            {flag}
          </button>
        );
      })}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { marcoLocalePath, resolveMarcoLocaleFromPath } from "@/lib/marco-seo";
import { marcoLocales } from "@/components/marco/marco-locale-provider";

export function MarcoLanguageFlags({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const activeLocale = resolveMarcoLocaleFromPath(pathname) ?? "en";

  return (
    <div
      className={`flex items-center gap-2.5 text-xs ${className}`}
      role="group"
      aria-label="Language"
    >
      {marcoLocales.map(({ code, label }, index) => {
        const active = activeLocale === code;
        return (
          <span key={code} className="inline-flex items-center gap-2.5">
            {index > 0 && (
              <span className="text-[#3B3B3B]/20 select-none" aria-hidden>
                ·
              </span>
            )}
            <Link
              href={marcoLocalePath(code)}
              hrefLang={code}
              aria-label={label}
              aria-current={active ? "true" : undefined}
              className={`uppercase tracking-[0.08em] transition-colors ${
                active
                  ? "text-[#3B3B3B]"
                  : "text-[#3B3B3B]/40 hover:text-[#3B3B3B]/70"
              }`}
            >
              {code}
            </Link>
          </span>
        );
      })}
    </div>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  marcoTranslations,
  type MarcoCopy,
  type MarcoLocale,
} from "@/components/marco/marco-translations";

const STORAGE_KEY = "marco-locale";

type MarcoLocaleContextValue = {
  locale: MarcoLocale;
  setLocale: (locale: MarcoLocale) => void;
  t: MarcoCopy;
};

const MarcoLocaleContext = createContext<MarcoLocaleContextValue | null>(null);

export const marcoLocales: {
  code: MarcoLocale;
  flag: string;
  label: string;
}[] = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "nl", flag: "🇳🇱", label: "Nederlands" },
];

function isMarcoLocale(value: string): value is MarcoLocale {
  return value === "en" || value === "de" || value === "nl";
}

export function MarcoLocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<MarcoLocale>("en");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("lang");
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = fromUrl && isMarcoLocale(fromUrl) ? fromUrl : stored && isMarcoLocale(stored) ? stored : "en";
    setLocaleState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLocale = useCallback((next: MarcoLocale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const value: MarcoLocaleContextValue = {
    locale,
    setLocale,
    t: marcoTranslations[locale],
  };

  return (
    <MarcoLocaleContext.Provider value={value}>{children}</MarcoLocaleContext.Provider>
  );
}

export function useMarcoLocale() {
  const context = useContext(MarcoLocaleContext);
  if (!context) {
    throw new Error("useMarcoLocale must be used within MarcoLocaleProvider");
  }
  return context;
}

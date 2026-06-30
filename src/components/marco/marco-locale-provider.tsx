"use client";

import {
  createContext,
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
  t: MarcoCopy;
};

const MarcoLocaleContext = createContext<MarcoLocaleContextValue | null>(null);

export const marcoLocales: {
  code: MarcoLocale;
  label: string;
}[] = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "nl", label: "Nederlands" },
];

export function MarcoLocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: MarcoLocale;
}) {
  const [locale, setLocaleState] = useState<MarcoLocale>(initialLocale);

  useEffect(() => {
    setLocaleState(initialLocale);
    document.documentElement.lang = initialLocale;
    localStorage.setItem(STORAGE_KEY, initialLocale);
  }, [initialLocale]);

  const value: MarcoLocaleContextValue = {
    locale,
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

"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "mn";

interface SiteCtx {
  dark: boolean;
  lang: Lang;
  toggleDark(): void;
  setLang(l: Lang): void;
}

const Ctx = createContext<SiteCtx>({
  dark: false,
  lang: "en",
  toggleDark: () => {},
  setLang: () => {},
});

export const useSite = () => useContext(Ctx);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Ctx.Provider value={{ dark, lang, toggleDark: () => setDark((v) => !v), setLang }}>
      {children}
    </Ctx.Provider>
  );
}

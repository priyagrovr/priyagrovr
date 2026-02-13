"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  translations,
  type LangCode,
  type Translations,
} from "./translations";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  const setLang = useCallback((code: LangCode) => {
    setLangState(code);
    document.documentElement.lang = code;
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

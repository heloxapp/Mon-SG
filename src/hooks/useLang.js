import { createContext, useContext } from 'react';

export const LangContext = createContext({ lang: 'fr', setLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

// Helper to get text from a bilingual object or plain string
export function t(obj, lang) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.fr || '';
}
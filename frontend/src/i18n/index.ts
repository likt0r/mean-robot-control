import { Locales } from "./locales";
import VueI18n from "vue-i18n";
import en from "./en.json";

export const messages = {
  [Locales.EN]: en
};

export const defaultLocale = Locales.EN;
let i18n: VueI18n;

export function getI18n() {
  if (!i18n)
    i18n = new VueI18n({
      messages,
      locale: defaultLocale,
      fallbackLocale: defaultLocale
    });
  return i18n;
}

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useTranslation as useTranslationDefault } from "react-i18next";

export const useTranslation = (keyPrefix, ns = "translation") =>
  useTranslationDefault(ns, { keyPrefix });

export const objectTranslation = (keyPrefix, ns = "translation") =>
  i18n.t(keyPrefix, {
    returnObjects: true,
    ns,
  });

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;

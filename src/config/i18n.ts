import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as Localization from "expo-localization";

import { translations } from "./translations";

const local_locale = Localization.getLocales()[0].languageCode || undefined;

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: translations,
  lng: "en",
  fallbackLng: "en"
});

i18n.changeLanguage(local_locale);
export default i18n;

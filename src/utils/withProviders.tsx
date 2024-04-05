import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { themes } from "@contexts/theme";
import { translations } from "@config/translations";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";

const resources = {
  en: translations.en,
  pt: translations.pt
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export const withProviders = (children: ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={themes.mage}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </I18nextProvider>
  );
};

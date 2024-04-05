import React, { createContext, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import { mageTheme } from "./mageTheme";
import { vampireTheme } from "./vampireTheme";
import { werewolfTheme } from "./werewolfTheme";

export enum ThemeType {
  mage = "mage",
  vampire = "vampire",
  werewolf = "werewolf"
}

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const themes = {
  mage: mageTheme,
  vampire: vampireTheme,
  werewolf: werewolfTheme
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.mage);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import { mageTheme } from "./mageTheme";
import { vampireTheme } from "./vampireTheme";
import { werewolfTheme } from "./werewolfTheme";

export enum ThemeType {
  mage = "mage",
  vampire = "vampire",
  werewolf = "werewolf"
}

export const themes = {
  mage: mageTheme,
  vampire: vampireTheme,
  werewolf: werewolfTheme
};

export const ThemeContext = createContext({
  theme: ThemeType.vampire
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.mage);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

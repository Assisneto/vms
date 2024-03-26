import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
    };
  }
}

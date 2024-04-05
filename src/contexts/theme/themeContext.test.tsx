import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { ThemeProvider, ThemeContext, ThemeType, themes } from "./ThemeContext";
import { TouchableOpacity, Text } from "react-native";

describe("ThemeProvider", () => {
  it("should change theme on setTheme call", async () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <React.Fragment>
              <TouchableOpacity
                testID="mageButton"
                onPress={() => setTheme(ThemeType.mage)}
              >
                <Text>Mage Theme</Text>
              </TouchableOpacity>
              <TouchableOpacity
                testID="vampireButton"
                onPress={() => setTheme(ThemeType.vampire)}
              >
                <Text>Vampire Theme</Text>
              </TouchableOpacity>
              <Text testID="themeText">{themes[theme].colors.primary}</Text>
            </React.Fragment>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const mageButton = getByTestId("mageButton");
    const vampireButton = getByTestId("vampireButton");
    const textComponent = getByTestId("themeText");

    await act(async () => {
      fireEvent.press(mageButton);
    });
    expect(textComponent.children[0]).toBe(
      themes[ThemeType.mage].colors.primary
    );

    await act(async () => {
      fireEvent.press(vampireButton);
    });
    expect(textComponent.children[0]).toBe(
      themes[ThemeType.vampire].colors.primary
    );
  });

  it("should have default theme as mage", () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <Text testID="themeText">{themes[theme].colors.primary}</Text>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const textComponent = getByTestId("themeText");
    expect(textComponent.children[0]).toBe(
      themes[ThemeType.mage].colors.primary
    );
  });
});

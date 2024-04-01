import React from "react";
import { render } from "@testing-library/react-native";
import { Home } from "./index";
import { ThemeProvider } from "styled-components/native";
import { themes } from "../../theme";

describe("<Home/>", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={themes.vampire}>
        <Home />
      </ThemeProvider>
    );
    expect(getByText("Vms")).toBeTruthy();
  });
});

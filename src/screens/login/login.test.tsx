import React from "react";

import { Login } from ".";
import { withProviders } from "@utils/withProviders";
import { translation } from "@config/translations/en.json";

describe("<Login />", () => {
  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = withProviders(<Login />);

    expect(getByText(translation.loginText)).toBeTruthy();

    expect(getByPlaceholderText(translation.email)).toBeTruthy();
    expect(getByPlaceholderText(translation.password)).toBeTruthy();

    expect(getByText(translation.signIn)).toBeTruthy();
    expect(
      getByText(`${translation.dontHaveAccount} ${translation.signUp}`)
    ).toBeTruthy();
  });
});

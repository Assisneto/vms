import React from "react";
import { fireEvent } from "@testing-library/react-native";
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

  it("updates email and password", () => {
    const { getByPlaceholderText, getByText, queryByText } = withProviders(
      <Login />
    );

    const emailInput = getByPlaceholderText(translation.email);
    const passwordInput = getByPlaceholderText(translation.password);

    fireEvent.changeText(emailInput, "test@example.com");

    expect(queryByText(translation.invalidEmail)).toBeNull();

    fireEvent.changeText(passwordInput, "password123");

    expect(queryByText(translation.emptyPassword)).toBeNull();
  });

  it("updates email and password but wrong data", () => {
    const { getByPlaceholderText, getByText, queryByText } = withProviders(
      <Login />
    );

    const emailInput = getByPlaceholderText(translation.email);
    const passwordInput = getByPlaceholderText(translation.password);

    fireEvent.changeText(emailInput, "invalidemail");

    expect(getByText(translation.invalidEmail)).toBeTruthy();

    fireEvent.changeText(passwordInput, "");

    expect(getByText(translation.emptyPassword)).toBeTruthy();
  });
});

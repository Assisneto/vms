import React, { ReactNode } from "react";
import { act, fireEvent, waitFor } from "@testing-library/react-native";
import { Login } from ".";
import { withProviders } from "@utils/withProviders";
import { translation } from "@config/translations/en.json";

import { Alert } from "react-native";
import { routesName } from "@utils/routesName";
import { AppError } from "@utils/AppError";

const mockSignIn = jest
  .fn()
  .mockResolvedValue({ id: "1", name: "John Doe", token: "abc123" });

jest.mock("@hooks/useAuth", () => ({
  useAuth: () => ({
    signIn: mockSignIn,
    user: null
  })
}));

const mockNavigation = { navigate: jest.fn() };
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn(),

  useNavigation: () => mockNavigation,
  NavigationContainer: ({ children }: { children: ReactNode }) => children
}));

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

  it("updates email and password", async () => {
    const { getByPlaceholderText, queryByText } = withProviders(<Login />);

    const emailInput = getByPlaceholderText(translation.email);
    const passwordInput = getByPlaceholderText(translation.password);

    await waitFor(
      async () =>
        await act(async () => {
          fireEvent.changeText(emailInput, "test@example.com");
        })
    );
    await waitFor(
      async () =>
        await act(async () => {
          fireEvent.changeText(passwordInput, "password123");
        })
    );

    expect(queryByText(translation.invalidEmail)).toBeNull();

    expect(queryByText(translation.emptyPassword)).toBeNull();
  });

  it("updates email and password but wrong data", () => {
    const { getByPlaceholderText, getByText } = withProviders(<Login />);

    const emailInput = getByPlaceholderText(translation.email);
    const passwordInput = getByPlaceholderText(translation.password);

    fireEvent.changeText(emailInput, "invalidemail");

    expect(getByText(translation.invalidEmail)).toBeTruthy();

    fireEvent.changeText(passwordInput, "");

    expect(getByText(translation.emptyPassword)).toBeTruthy();
  });
  it("handles sign-in with correct credentials", async () => {
    const email = "test@example.com";
    const password = "password123";

    const { getByPlaceholderText, getByText } = withProviders(<Login />);

    fireEvent.changeText(getByPlaceholderText(translation.email), email);
    fireEvent.changeText(getByPlaceholderText(translation.password), password);
    await act(async () => {
      fireEvent.press(getByText(translation.signIn));
    });
    await act(async () => {
      expect(mockSignIn).toHaveBeenCalledWith(email, password);
      expect(mockNavigation.navigate).toHaveBeenCalledWith(routesName.HOME);
    });
  });

  it("handles sign-in failure with backend error", async () => {
    const email = "test@example.com";
    const password = "wrongpassword";
    const appError = new AppError();
    appError.setError({ errors: translation.userOrPasswordWrong });
    mockSignIn.mockRejectedValueOnce(appError);

    const { getByPlaceholderText, getByText } = withProviders(<Login />);

    fireEvent.changeText(getByPlaceholderText(translation.email), email);
    fireEvent.changeText(getByPlaceholderText(translation.password), password);

    const alertSpy = jest.spyOn(Alert, "alert");

    await waitFor(
      async () =>
        await act(async () => {
          fireEvent.press(getByText(translation.signIn));
        })
    );

    expect(alertSpy).toHaveBeenCalledWith("", translation.userOrPasswordWrong);
  });

  it("handles sign-in failure with internal error", async () => {
    const email = "test@example.com";
    const password = "internal";
    mockSignIn.mockRejectedValueOnce(new Error("internal error"));

    const { getByPlaceholderText, getByText } = withProviders(<Login />);

    fireEvent.changeText(getByPlaceholderText(translation.email), email);
    fireEvent.changeText(getByPlaceholderText(translation.password), password);

    const alertSpy = jest.spyOn(Alert, "alert");

    await waitFor(
      async () =>
        await act(async () => {
          fireEvent.press(getByText(translation.signIn));
        })
    );

    expect(alertSpy).toHaveBeenCalledWith("", translation.internalError);
  });
});

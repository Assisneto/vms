import React from "react";
import { render, act, fireEvent, waitFor } from "@testing-library/react-native";
import { AuthProvider, AuthContext, AuthContextType } from "./AuthContext";

import { api } from "@services/api";
import { Alert, Text, TouchableOpacity } from "react-native";

const errorMessage = "Invalid credentials";
const mockData = { id: "testId", name: "testName", token: "testToken" };

describe("AuthProvider", () => {
  it("should set user on signIn success", async () => {
    jest.spyOn(api, "post").mockResolvedValue({ data: mockData });

    const { getByTestId } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ signIn, user }) => (
            <>
              <TouchableOpacity
                testID="button"
                onPress={() => signIn("john@example.com", "password123")}
              >
                <Text>Sign In</Text>
              </TouchableOpacity>
              <Text testID="id">{user?.id}</Text>
              <Text testID="name">{user?.name}</Text>
              <Text testID="token">{user?.token}</Text>
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const button = getByTestId("button");
    fireEvent.press(button);

    await waitFor(() => {
      expect(getByTestId("id").props.children).toBe(mockData.id);
      expect(getByTestId("name").props.children).toBe(mockData.name);
      expect(getByTestId("token").props.children).toBe(mockData.token);
    });
  });

  it("should throw AppError on signIn failure", async () => {
    jest.spyOn(api, "post").mockRejectedValue(errorMessage);
    const alertSpy = jest.spyOn(Alert, "alert");

    const { getByTestId } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ signIn }) => (
            <TouchableOpacity
              testID="button"
              onPress={async () => {
                try {
                  await signIn("john@example.com", "wrongpassword");
                } catch (error) {
                  const errorMessage =
                    error instanceof Error ? error.message : String(error);
                  Alert.alert("", errorMessage);
                }
              }}
            >
              <Text>Sign In</Text>
            </TouchableOpacity>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const button = getByTestId("button");

    await act(async () => await fireEvent.press(button));
    await waitFor(() =>
      expect(alertSpy).toHaveBeenCalledWith("", errorMessage)
    );
  });
});

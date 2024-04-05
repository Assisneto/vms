import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "@assets/logo.svg";
import { isValidEmail } from "@utils/isValidEmail";
import {
  Container,
  Title,
  Header,
  Body,
  Input,
  InputContainer,
  SubTitle,
  ErrorText,
  CustomButton
} from "./styles";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { useAuth } from "@hooks/useAuth";

export const Login = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { signIn, user } = useAuth();

  const updateFormState = (newEmail: string, newPassword: string) => {
    const validateEmail = (email: string) => {
      if (!isValidEmail(email)) {
        setEmailError(t("invalidEmail"));
        return false;
      } else {
        setEmailError("");
        return true;
      }
    };

    const validatePassword = (password: string) => {
      if (password.length === 0) {
        setPasswordError(t("emptyPassword"));
        return false;
      } else {
        setPasswordError("");
        return true;
      }
    };

    setEmail(newEmail);
    setPassword(newPassword);

    validateEmail(newEmail);
    validatePassword(newPassword);
  };

  const isButtonDisabled =
    emailError !== "" ||
    passwordError !== "" ||
    email === "" ||
    password === "";

  const handleSignIn = async (email: string, password: string) => {
    try {
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const errorMessage = isAppError
        ? t("userOrPasswordWrong")
        : t("internalError");
      Alert.alert("", errorMessage);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Container>
        <Header>
          <Logo width={150} height={150} />
        </Header>
        <Body>
          <Title>{t("loginText")}</Title>
          <InputContainer>
            <Input
              placeholder={t("email")}
              onChangeText={(text) => updateFormState(text, password)}
            />
            {emailError ? <ErrorText>{emailError}</ErrorText> : null}
            <Input
              placeholder={t("password")}
              onChangeText={(text) => updateFormState(email, text)}
            />
            {passwordError ? <ErrorText>{passwordError}</ErrorText> : null}

            <CustomButton
              onPress={() => handleSignIn(email, password)}
              disabled={isButtonDisabled}
            >
              <SubTitle>{t("signIn")}</SubTitle>
            </CustomButton>
          </InputContainer>

          <CustomButton transparent onPress={() => console.log(user)}>
            <SubTitle>
              {t("dontHaveAccount")} {t("signUp")}
            </SubTitle>
          </CustomButton>
        </Body>
      </Container>
    </KeyboardAvoidingView>
  );
};

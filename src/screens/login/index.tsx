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
import { KeyboardAvoidingView, Platform } from "react-native";

export const Login = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
              onPress={() => console.log(email, password)}
              disabled={isButtonDisabled}
            >
              <SubTitle>{t("signIn")}</SubTitle>
            </CustomButton>
          </InputContainer>

          <CustomButton transparent>
            <SubTitle>
              {t("dontHaveAccount")} {t("signUp")}
            </SubTitle>
          </CustomButton>
        </Body>
      </Container>
    </KeyboardAvoidingView>
  );
};

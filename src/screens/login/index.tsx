import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useTranslation } from "react-i18next";
import Logo from "@assets/logo.svg";
import { isValidEmail } from "@utils/isValidEmail";

import { useNavigation } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { useAuth } from "@hooks/useAuth";
import { routesName } from "@utils/routesName";

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

export const Login = () => {
  const { t } = useTranslation();
  const { signIn, user } = useAuth();
  const navigation = useNavigation();

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

  const handleSignIn = async (email: string, password: string) => {
    try {
      await signIn(email, password);
      navigation.navigate(routesName.HOME);
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
              autoCapitalize="none"
            />

            {emailError ? <ErrorText>{emailError}</ErrorText> : <></>}

            <Input
              placeholder={t("password")}
              onChangeText={(text) => updateFormState(email, text)}
              secureTextEntry={true}
              autoCapitalize="none"
            />

            {passwordError ? <ErrorText>{passwordError}</ErrorText> : <></>}

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

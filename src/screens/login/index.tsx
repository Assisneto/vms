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
  Button,
  ButtonContainer,
  SubTitle,
  SubTitleContainer,
  ErrorText
} from "./styles";
import { KeyboardAvoidingView, Platform } from "react-native";

export const Login = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const updateFormState = (newEmail: string, newPassword: string) => {
    let isValid = true;

    if (!isValidEmail(newEmail)) {
      setEmailError(t("invalidEmail"));
      isValid = false;
    } else {
      setEmailError("");
    }

    if (newPassword.length === 0) {
      setPasswordError(t("emptyPassword"));
      isValid = false;
    } else {
      setPasswordError("");
    }

    setEmail(newEmail);
    setPassword(newPassword);
    setIsFormValid(isValid);
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
            <ButtonContainer>
              <Button
                onPress={() => console.log(email, password)}
                disabled={!isFormValid}
              >
                <SubTitle>{t("signIn")}</SubTitle>
              </Button>
            </ButtonContainer>
          </InputContainer>
          <SubTitleContainer>
            <Button>
              <SubTitle>
                {t("dontHaveAccount")} {t("signUp")}
              </SubTitle>
            </Button>
          </SubTitleContainer>
        </Body>
      </Container>
    </KeyboardAvoidingView>
  );
};

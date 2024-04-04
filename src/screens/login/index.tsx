import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "@assets/logo.svg";
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
  SubTitleColored
} from "./styles";
import { Image, KeyboardAvoidingView, Platform } from "react-native";

export const Login = () => {
  const { t } = useTranslation();
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
            <Input placeholder={t("email")} />
            <Input placeholder={t("password")} />
            <ButtonContainer>
              <Button>
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

import { Container, Title } from "./styles";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("vms")}</Title>
    </Container>
  );
};

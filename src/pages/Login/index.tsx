import { Image, TouchableOpacity } from "react-native";
import LogoIfrn from "../../assets/Icons/icon-if-logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  LoginView,
  ViewTitle,
  TitleText,
  ViewLoginForm,
  AuthorText,
} from "./styles";
import { useState } from "react";

interface LoginProps {
  onLogin?: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [showInfoCounter, setShowInfoCounter] = useState(0);

  return (
    <LoginView>
      <TouchableOpacity
        onPress={() => setShowInfoCounter((prev) => (prev += 1))}
      >
        <Image source={LogoIfrn} />
      </TouchableOpacity>
      <ViewTitle>
        <TitleText>Agenda</TitleText>
        <TitleText>IFRN</TitleText>
      </ViewTitle>
      <ViewLoginForm>
        <Input placeholder="Login" />
        <Input placeholder="Senha" />
        <Button onPress={onLogin}>Entrar</Button>
      </ViewLoginForm>
      {showInfoCounter > 10 && (
        <>
          <AuthorText>IFRN - Desenvolvimento de dispositivos móveis 2024.2</AuthorText>
          <AuthorText>Aluno: Willian Micael de Paiva</AuthorText>
        </>
      )}
    </LoginView>
  );
}

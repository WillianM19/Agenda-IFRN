import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import LogoIfrn from "../../assets/Icons/icon-if-logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { LoginView, ViewTitle, TitleText, ViewLoginForm } from "./styles";
import { Dispatch } from "react";

interface LoginProps {
    onLogin?: () => void;
}

export default function Login({onLogin}: LoginProps) {
  return (
    <LoginView>
        <Image source={LogoIfrn} />
        <ViewTitle>
            <TitleText>Agenda</TitleText>
            <TitleText>IFRN</TitleText>
        </ViewTitle>
        <ViewLoginForm>
            <Input placeholder="Login"/>
            <Input placeholder="Senha"/>
            <Button onPress={onLogin}>Entrar</Button>
        </ViewLoginForm>
    </LoginView>
  );
}

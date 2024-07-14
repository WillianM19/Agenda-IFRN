import styled from "styled-components/native";
import { STextInput } from "./styles";

interface InputProps {
  placeholder: string;
  width?: string;
  alt?: boolean; //Estilo alternativo
}

export default function Input(props: InputProps) {
  return <STextInput {...props}></STextInput>;
}

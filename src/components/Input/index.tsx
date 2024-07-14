import styled from "styled-components/native";
import { STextInput } from "./styles";

interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
  return <STextInput placeholder={placeholder}></STextInput>;
}

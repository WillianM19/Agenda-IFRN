import styled from "styled-components/native";
import { ButtonText, STouchableOpacity } from "./styles";

interface ButtonProps {
  value: string;
}

export default function Button({ value }: ButtonProps) {
  return (
    <STouchableOpacity>
      <ButtonText>{value}</ButtonText>
    </STouchableOpacity>
  );
}

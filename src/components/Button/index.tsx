import styled from "styled-components/native";
import { ButtonText, STouchableOpacity } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  width?: string;
  alt?: boolean; //Estilo alternativo
  margin?: string;
  onPress?: () => void;
}

export default function Button({ children, width, onPress, margin, alt }: ButtonProps) {
  return (
    <STouchableOpacity width={width} alt={alt} margin={margin} onPress={onPress}>
      <ButtonText alt={alt}>{children}</ButtonText>
    </STouchableOpacity>
  );
}

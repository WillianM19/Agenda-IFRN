import { STextInput } from "./styles";

interface InputProps {
  placeholder: string;
  width?: string;
  alt?: boolean; //Estilo alternativo
  onChangeText?: (value: string) => void;
  value?: string;
}

export default function Input(props: InputProps) {
  return (
    <STextInput
      {...props}
      onChangeText={(value) => props.onChangeText && props.onChangeText(value)}
    ></STextInput>
  );
}

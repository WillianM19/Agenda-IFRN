import { Image } from "react-native";
import IconChecked from "../../assets/Icons/icon-checked.png";
import { CheckboxView } from "./styles";

interface CheckboxProps {
  checked?: boolean;
}

export default function Checkbox({ checked }: CheckboxProps) {
  return (
    <CheckboxView checked={checked}>
      {checked && <Image source={IconChecked} />}
    </CheckboxView>
  );
}

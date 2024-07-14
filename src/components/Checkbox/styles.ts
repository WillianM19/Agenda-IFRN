import styled from "styled-components/native";

export const CheckboxView = styled.View<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
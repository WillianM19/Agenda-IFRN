import styled from "styled-components/native";

export const ViewInputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 68px;
  margin-bottom: 31px;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.bg};
  margin-top: 35px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskCreateView = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
`;

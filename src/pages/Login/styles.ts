import styled from "styled-components/native";

export const ViewTitle = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
`

export const ViewLoginForm = styled.View`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 32px;
    margin-bottom: 20px;
`

export const LoginView = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const TitleText = styled.Text`
  color: white;
  font-size: 36px;
  font-weight: bold;
`;

export const AuthorText = styled.Text`
  color: white;
`
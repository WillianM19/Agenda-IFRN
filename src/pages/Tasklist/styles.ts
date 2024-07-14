import styled from "styled-components/native";

export const ListItemText = styled.Text<{checked?:boolean}>`
  text-decoration: ${({checked}) => checked ? "line-through" : "none"};
  color: ${({theme, checked}) => checked ? theme.colors.primary : "black"}
`

export const ListItemCheckButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const ListItem = styled.View<{ BgColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 48px;
  background-color: ${({ BgColor }) => BgColor};
`;

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 40px;
`;

export const ViewInputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const Title2 = styled(Title)`
  font-size: 15px;
  font-weight: regular;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.bg};
  margin-top: 35px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 38px;
`;

export const TaskCreateView = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
`;
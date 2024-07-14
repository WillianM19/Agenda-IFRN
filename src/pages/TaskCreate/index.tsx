import { Text, View } from "react-native";
import styled from "styled-components/native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function TaskCreate() {
  return (
    <TaskCreateView>
        <Container>
          <Title>Cadastro de Tarefa</Title>
          <ViewInputs>
            <Input width="312px" placeholder="Título" alt />
            <Input width="312px" placeholder="Descrição" alt />
            <Input width="312px" placeholder="Categorias" alt />
            <Input width="312px" placeholder="Data" alt />
            <Button width="312px" margin="17px 0 0 0" alt>Cadastrar</Button>
          </ViewInputs>
        </Container>
    </TaskCreateView>
  );
}

const ViewInputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
  margin-top: 68px;
  margin-bottom: 31px;
`

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.bg};
  margin-top: 35px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const TaskCreateView = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: 100%;
`
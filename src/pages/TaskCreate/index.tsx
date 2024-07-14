import { Text, View } from "react-native";
import styled from "styled-components/native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { SetStateAction, useState } from "react";
import { TaskListItemProps } from "../Tasklist";

interface TaskCreateProps {
  setTaskList: (taskList: SetStateAction<TaskListItemProps[]>) => void;
}

export default function TaskCreate({ setTaskList }: TaskCreateProps) {
  const [taskName, setTaskName] = useState("");

  function createTask() {
    setTaskList((prev) => {
      const newTask: TaskListItemProps = {
        id: prev.length + 1,
        name: taskName,
        checked: false
      }

      return [...prev, newTask]
    })
    setTaskName('')
  }

  return (
    <TaskCreateView>
      <Container>
        
        <Title>Cadastro de Tarefa</Title>
        <Text>{taskName}{}</Text>
        <ViewInputs>
          <Input
            width="312px"
            placeholder="Título"
            value={taskName}
            onChangeText={(value) => setTaskName(value)}
            alt
          />
          <Input width="312px" placeholder="Descrição" alt />
          <Input width="312px" placeholder="Categorias" alt />
          <Input width="312px" placeholder="Data" alt />
          <Button width="312px" margin="17px 0 0 0" alt onPress={() => createTask()}>
            Cadastrar
          </Button>
        </ViewInputs>
      </Container>
    </TaskCreateView>
  );
}

const ViewInputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 68px;
  margin-bottom: 31px;
`;

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.bg};
  margin-top: 35px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskCreateView = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
`;

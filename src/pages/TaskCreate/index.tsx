import Input from "../../components/Input";
import Button from "../../components/Button";
import { SetStateAction, useState } from "react";
import { TaskListItemProps } from "../Tasklist";
import { Container, TaskCreateView, Title, ViewInputs } from "./styles";

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


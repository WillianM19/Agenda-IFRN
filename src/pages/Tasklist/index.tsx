import {
  Text,
  View,
  Image,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import styled from "styled-components/native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import IconTrash from "../../assets/Icons/icon-trash.png";
import { useState } from "react";

interface taskListProps {
  id: number;
  name: string;
  checked: boolean;
}

export default function TaskList() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [taskList, setTaskList] = useState<taskListProps[]>([
    { id: 0, name: "Tarefa teste", checked: false },
    { id: 1, name: "Tarefa teste 2", checked: false },
    { id: 2, name: "Tarefa teste 3", checked: false },
    { id: 3, name: "Tarefa teste 4", checked: false },
  ]);

  return (
    <TaskCreateView>
      <ContainerHeader>
        <Title>Agenda.IFRN</Title>
        <Title2>Você tem 2 tarefas</Title2>
      </ContainerHeader>
      <Container>
        {taskList.map((task, index) => (
          <ListItem BgColor={index % 2 == 0 ? "#0000001c" : "white"}>
            <Text>{task.name}</Text>
            <TouchableOpacity
              onPress={() =>
                setTaskList((prev) =>
                  prev.filter((prevTask) => prevTask.id != task.id)
                )
              }
            >
              <Image source={IconTrash} />
            </TouchableOpacity>
          </ListItem>
        ))}
      </Container>
    </TaskCreateView>
  );
}

const ListItem = styled.View<{ BgColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 48px;
  background-color: ${({ BgColor }) => BgColor};
`;

const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 40px;
`;

const ViewInputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const Title2 = styled(Title)`
  font-size: 15px;
  font-weight: regular;
`;

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.bg};
  margin-top: 35px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 38px;
`;

const TaskCreateView = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
`;

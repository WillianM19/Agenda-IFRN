import {
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import IconTrash from "../../assets/Icons/icon-trash.png";
import { SetStateAction } from "react";
import Checkbox from "../../components/Checkbox";
import { TaskCreateView, ContainerHeader, Title, Title2, Container, ListItem, ListItemCheckButton, ListItemText } from "./styles";

interface TaskListProps {
  taskList: TaskListItemProps[];
  setTaskList: (taskList: SetStateAction<TaskListItemProps[]>) => void;
}

export interface TaskListItemProps {
  id: number;
  name: string;
  checked: boolean;
}

export default function TaskList({ taskList, setTaskList }: TaskListProps) {
  return (
    <TaskCreateView>
      <ContainerHeader>
        <Title>Agenda.IFRN</Title>
        <Title2>Você tem {taskList.length} tarefas</Title2>
      </ContainerHeader>
      <Container>
        {taskList.length > 0 ? (
          taskList.map((task, index) => (
            <ListItem
              BgColor={index % 2 == 0 ? "#0000001c" : "white"}
              key={task.id}
            >
              <ListItemCheckButton
                onPress={() =>
                  setTaskList((prev) =>
                    prev.map((prevTask) =>
                      prevTask.id == task.id
                        ? { ...prevTask, checked: !prevTask.checked }
                        : prevTask
                    )
                  )
                }
              >
                <Checkbox checked={task.checked} />
                <ListItemText checked={task.checked}>{task.name}</ListItemText>
              </ListItemCheckButton>
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
          ))
        ) : (
          <Text>Não há tarefas</Text>
        )}
      </Container>
    </TaskCreateView>
  );
}



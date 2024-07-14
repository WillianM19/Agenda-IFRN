import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/Login";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme";
import TaskCreate from "./src/pages/TaskCreate";
import NavBar from "./src/components/NavBar";
import { useState } from "react";
import TaskList, { TaskListItemProps } from "./src/pages/Tasklist";

export type pages = "Login" | "TaskCreate" | "TaskList";

export default function App() {
  const [currentPage, setCurrentPage] = useState<pages>("Login");

  const [taskList, setTaskList] = useState<TaskListItemProps[]>([]);

  return (
    <ThemeProvider theme={theme}>
      {currentPage == "Login" ? (
        <Login onLogin={() => setCurrentPage("TaskCreate")} />
      ) : currentPage == "TaskCreate" ? (
        <TaskCreate setTaskList={setTaskList} />
      ) : (
        <TaskList taskList={taskList} setTaskList={setTaskList} />
      )}

      {currentPage != "Login" && <NavBar setCurrentPage={setCurrentPage} />}
    </ThemeProvider>
  );
}

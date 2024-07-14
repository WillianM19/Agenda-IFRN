import { Text, Image } from "react-native";

import IconCalendar from "../../assets/Icons/icon-calendar.png"
import IconList from "../../assets/Icons/icon-list.png"
import { SetStateAction } from "react";
import { pages } from "../../../App";
import { ViewNavBar, NavButton } from "./styles";

interface NavBarProps {
    setCurrentPage: (c: SetStateAction<pages>) => void
}

export default function NavBar({setCurrentPage}: NavBarProps) {
    return (
        <ViewNavBar>
            <NavButton onPress={() => setCurrentPage("TaskCreate")}>
                <Image source={IconCalendar}/>
                <Text>Registrar Tarefa</Text>
            </NavButton>
            <NavButton onPress={() => setCurrentPage("TaskList")}>
                <Image source={IconList}/>
                <Text>Listar Tarefa</Text>
            </NavButton>
        </ViewNavBar>
    )
}
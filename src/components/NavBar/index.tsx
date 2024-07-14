import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

import IconCalendar from "../../assets/Icons/icon-calendar.png"
import IconList from "../../assets/Icons/icon-list.png"
import { SetStateAction } from "react";
import { pages } from "../../../App";

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
                <Text>Registrar Tarefa</Text>
            </NavButton>
        </ViewNavBar>
    )
}

const NavButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    gap: 10px;
`

const ViewNavBar = styled.View`
    width: 100%;
    height: 80px;
    z-index: 9999;
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: white;
`
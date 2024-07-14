import styled from "styled-components/native"

export const NavButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ViewNavBar = styled.View`
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
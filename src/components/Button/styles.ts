import styled from "styled-components/native"

export const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
`

export const STouchableOpacity = styled.TouchableOpacity`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: ${({theme}) => theme.colors.button};
`
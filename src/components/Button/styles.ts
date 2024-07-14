import styled from "styled-components/native"

export const ButtonText = styled.Text<{alt?:boolean}>`
    color: white;
    font-size: 18px;
    font-style: ${({alt}) => alt && "italic"};
    font-weight: ${({alt}) => alt ? "bold" : "regular"};
`

export const STouchableOpacity = styled.TouchableOpacity<{width?: string, alt?:boolean, margin?:string}>`
    width: ${({width}) => width ? width : "250px"};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: ${({theme, alt}) => alt ? theme.colors.primary : theme.colors.button};
    border-radius: ${({alt}) => alt ? "8px" : "0"};
    margin: ${({margin}) => margin ? margin : "0"}
`
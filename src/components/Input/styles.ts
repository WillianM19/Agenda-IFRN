import styled from "styled-components/native";

export const STextInput = styled.TextInput<{alt?: boolean, width?: string}>`
    background-color: white;
    padding: 13px 16px;
    border-radius: 8px;
    width: ${({alt, width}) => width ? width : alt ? "300px" : "250px"};
    font-style: ${({alt}) => alt && "italic"};
    border: ${({alt, theme}) => alt ? `1px solid ${theme.colors.border}` : "none"};
`
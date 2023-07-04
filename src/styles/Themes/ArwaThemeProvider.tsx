import React, { ReactElement,  PropsWithChildren} from "react";
import { DefaultTheme, createGlobalStyle, ThemeProvider, css } from "styled-components";
import { Font } from "../../tokens";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${Font.FontStack.body};
        font-size: ${Font.FontSize.fs32};
        font-weight: ${Font.FontWeight.regular};
    }
    *, *:before, *:after {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }
    ${({theme}) => {
        return css`
            body {
                color: ${theme.colors.text.body.primary};
            }
        `
    }}
` 

const ArwaThemeProvider: React.FC<PropsWithChildren<{theme: DefaultTheme}>> = ({children, theme}) : ReactElement => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export default ArwaThemeProvider
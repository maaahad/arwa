import React, { ReactElement,  PropsWithChildren} from "react";
import { DefaultTheme, createGlobalStyle, ThemeProvider } from "styled-components";
import { Font } from "../../tokens";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${Font.fontFamily};
        font-size: ${Font.fontSize}px;
        font-weight: ${Font.fontWeight.normal};
    }
    *, *:before, *:after {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }
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
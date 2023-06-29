import React, { ReactNode, ReactElement,  PropsWithChildren} from "react";
import { DefaultTheme, createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
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
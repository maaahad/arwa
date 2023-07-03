import React, { ReactElement,  PropsWithChildren} from "react";
import { DefaultTheme, createGlobalStyle, ThemeProvider } from "styled-components";


// FIXME: FontFace should come from tokens
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        // font-family: Averta Std, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, Cantarell,
        'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji;
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
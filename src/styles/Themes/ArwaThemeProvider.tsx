import React, { ReactElement, PropsWithChildren } from "react";
import {
  DefaultTheme,
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components";
import { FontTokens } from "../../tokens";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${FontTokens.FontStack.body};
        font-size: ${FontTokens.FontSize.fs16};
        font-weight: ${FontTokens.FontWeight.regular};
    }
    *, *:before, *:after {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }
    ${({ theme }) => {
      return css`
        body {
          color: ${theme.colors.text.body.primary};
        }
      `;
    }}
`;

const ArwaThemeProvider: React.FC<
  PropsWithChildren<{ theme: DefaultTheme }>
> = ({ children, theme }): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ArwaThemeProvider;

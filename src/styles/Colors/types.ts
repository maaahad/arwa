import { ColorTokens } from "../../tokens";

type Tokens = ColorTokens.Light | ColorTokens.Dark;

export type ArwaColors = {
  accent: {
    primary: Tokens;
    secondary: Tokens;
  };
  text: {
    body: {
      primary: Tokens;
      secondary: Tokens;
    };
    button: {
      primary: Tokens;
      secondary: Tokens;
    };
  };
  hover: {
    primary: Tokens;
    secondary: Tokens;
  };
  icon: Tokens;
  border: Tokens;
  background: Tokens;
  surface: Tokens;
  backdrop: Tokens;
};

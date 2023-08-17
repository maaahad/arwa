import { ShadowsTokens } from "../../tokens";

type Shadow = ShadowsTokens.Light | ShadowsTokens.Dark;

export type ArwaShadows = {
  xs: Shadow;
  sm: Shadow;
  md: Shadow;
  lg: Shadow;
  xl: Shadow;
};

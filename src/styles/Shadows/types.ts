import { type ShadowsTokens } from "../../tokens";

type Shadow = ShadowsTokens.Light | ShadowsTokens.Dark;

export interface ArwaShadows {
  xs: Shadow;
  sm: Shadow;
  md: Shadow;
  lg: Shadow;
  xl: Shadow;
}

import { type ColorTokens } from "../../tokens";

type IconColor = ColorTokens.Light | ColorTokens.Dark;
export enum IconSize {
  sm = 16,
  md = 24,
  lg = 32,
}

export interface IconProps {
  size?: keyof typeof IconSize;
  color?: IconColor;
}

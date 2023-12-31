import { type FontTokens } from "../../tokens";

interface T {
  fontSize: FontTokens.FontSize;
  fontWeight: FontTokens.FontWeight;
  lineHeight: FontTokens.LineHeight;
  // letterSpacing: FontTokens.LetterSpacing // FIXME: should be fixed later
}

export type ArwaFontWeight = {
  [key in keyof typeof FontTokens.FontWeight]: FontTokens.FontWeight;
};

export interface ArwaTypography {
  h1: T;
  fontWeight: ArwaFontWeight;
}

export type TypographySize =
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";

export interface TypographyProps {
  size?: TypographySize;
  secondary?: boolean;
}

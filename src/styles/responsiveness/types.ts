import { BreakpointTokens } from "../../tokens";
import type { Tuple } from "../../utils/types";

export enum CSSProperty {
  width = "width",
  height = "height",
}
export type Device = "xm" | "sm" | "md" | "lg" | "xl";
export type ResponsiveProp = "width" | "height";
export type ResponsiveDecleration = {
  [key in ResponsiveProp]?:
    | number
    | string
    | Tuple<string | number, 1 | 2 | 3 | 4 | 5>;
};

export type ResponsiveCSSDecleration = Record<
  string,
  string | Record<string, string>
>;
// FIXME: fix the type
// export type ResponsiveCSSDecleration = Record<`${CSSProperty}` | `${BreakpointTokens.Breakpoints}`, string | Record<`${CSSProperty}`, string>>

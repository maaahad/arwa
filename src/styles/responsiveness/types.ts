import { BreakpointTokens } from "../../tokens";
import type { Tuple } from "../../utils/types";

export enum CSSProperty {
  width = "width",
  height = "height",
}
export type Device = "xm" | "sm" | "md" | "lg" | "xl"; // TODo: move to right place
export type ResponsiveProp = "width" | "height";
export type ResponsivePropsValue = undefined | number
| string
| Tuple<string | number, 1 | 2 | 3 | 4 | 5>; // FIXME: 1 | 2 | 3 | 4 | 5 can be deduce using Device type

export type ResponsivePropDecleration = {
  [key in ResponsiveProp]?: ResponsivePropsValue
};

export type ResponsiveCSSDecleration = Partial<
  Record<`${CSSProperty}`, string>
>;
export type ResponsiveCSSDeclerations = ResponsiveCSSDecleration &
  Partial<Record<`${BreakpointTokens.Breakpoints}`, ResponsiveCSSDecleration>>;

import type { ArwaColors } from "../colors/types";
import { ShadowsTokens, FontTokens, TransitionTokens } from "../../tokens";
import "styled-components";
import { type ArwaShadows } from "../shadows/types";
import { type ArwaTypography } from "../typography/types";
import { type ArwaShapes } from "../shapes/types";
import { type ArwaBreakpoints, type ArwaDevice } from "../breakpoints/types";
import { ArwaTransitions } from "../transitions/types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ArwaColors; // rename it to palette???
    shadows: ArwaShadows;
    typography: ArwaTypography;
    shapes: ArwaShapes;
    breakpoints: ArwaBreakpoints;
    device: ArwaDevice;
    transitions: ArwaTransitions;

    // TODO: Reference: https://mui.com/material-ui/customization/default-theme/
    // spacing
    // zIndex
    // typography
    // default
    // h1-h6 (fontWeight, fontSize, lineHeight, letterSpacing)
    // Paragraph, caption, overline, button etc (fontWeight, fontSize, lineHeight, letterSpacing)
  }
}

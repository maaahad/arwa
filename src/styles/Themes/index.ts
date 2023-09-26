import Colors from "../colors";
import { type DefaultTheme } from "styled-components";
import ArwaThemeProvider from "./ArwaThemeProvider";
import Shadows from "../shadows";
import Typography from "../typography";
import Shapes from "../shapes";
import { Breakpoints } from "../breakpoints";
import { Transitions } from "../transitions";

// TODO: need some util type for
// size
// FIXME: write some jest-test

const getTheme = (theme: "Light" | "Dark"): DefaultTheme => {
  return {
    colors: Colors[theme],
    shadows: Shadows[theme],
    typography: Typography,
    shapes: Shapes,
    breakpoints: Breakpoints,
    device: ["xs", "sm", "md", "lg", "xl"], // TODO: solve it in a better way
    transitions: Transitions,
  };
};

export const Theme: {
  Light: DefaultTheme;
  Dark: DefaultTheme;
} = {
  Light: getTheme("Light"),
  Dark: getTheme("Dark"),
};

export default ArwaThemeProvider;

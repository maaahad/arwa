import Colors from "../colors"
import { DefaultTheme } from "styled-components"
import ArwaThemeProvider from './ArwaThemeProvider'
import Shadows from "../shadows"
import Typography from "../typography"
import Shapes from "../shapes"


// TODO: need some util type for 
// size
// FIXME: write some jest-test

const getTheme = (theme: 'Light' | 'Dark') : DefaultTheme => {
    return {
        colors: Colors[theme],
        shadows: Shadows[theme],
        typography: Typography,
        shapes: Shapes
    }
}

export const Theme: {
    Light: DefaultTheme,
    Dark: DefaultTheme,
} = {
    Light: getTheme('Light'),
    Dark: getTheme('Dark')
}

export default ArwaThemeProvider
import Colors from "../colors"
import { DefaultTheme } from "styled-components"
import ArwaThemeProvider from './ArwaThemeProvider'
import Shadows from "../shadows"

// TODO: need some util type for 
// size
// FIXME: write some jest-test

const getTheme = (theme: 'Light' | 'Dark') : DefaultTheme => {
    return {
        colors: Colors[theme],
        shadows: Shadows[theme],
        typography: {
            h1: {
            }
        }
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
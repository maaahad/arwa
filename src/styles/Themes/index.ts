import Colors from "../colors"
import { ShadowsTokens } from "../../tokens"
import { DefaultTheme } from "styled-components"

// TODO: need some util type for 
// size

// FIXME: write some jest-test

const getShadows = (theme: 'Light' | 'Dark') :  DefaultTheme['shadows']=> {
    return {
        xs: ShadowsTokens[theme].xs,
        sm: ShadowsTokens[theme].sm,
        md: ShadowsTokens[theme].md,
        lg: ShadowsTokens[theme].lg,
        xl: ShadowsTokens[theme].xl,
    }
}

const getTheme = (theme: 'Light' | 'Dark') : DefaultTheme => {
    return {
        colors: Colors[theme],
        shadows: getShadows(theme),
    }
}

const Theme: {
    Light: DefaultTheme,
    Dark: DefaultTheme,
} = {
    Light: getTheme('Light'),
    Dark: getTheme('Dark')
}

export default Theme
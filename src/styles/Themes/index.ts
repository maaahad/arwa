import { ArwaTheme } from "./types"
import Colors from "../colors"
import { ShadowsTokens } from "../../tokens"

// TODO: need some util type for 
// size

// FIXME: write some jest-test

const getShadows = (theme: 'Light' | 'Dark') :  ArwaTheme['shadows']=> {
    return {
        xs: ShadowsTokens[theme].xs,
        sm: ShadowsTokens[theme].sm,
        md: ShadowsTokens[theme].md,
        lg: ShadowsTokens[theme].lg,
        xl: ShadowsTokens[theme].xl,
    }
}

const getTheme = (theme: 'Light' | 'Dark') : ArwaTheme => {
    return {
        colors: Colors[theme],
        shadows: getShadows(theme),
    }
}

const Theme: {
    Light: ArwaTheme,
    Dark: ArwaTheme,
} = {
    Light: getTheme('Light'),
    Dark: getTheme('Dark')
}

export default Theme
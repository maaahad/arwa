import { ArwaShadows } from "./types"
import { ShadowsTokens } from "../../tokens"
import { DefaultTheme } from "styled-components"

const getShadows = (theme: 'Light' | 'Dark') :  DefaultTheme['shadows']=> {
    return {
        xs: ShadowsTokens[theme].xs,
        sm: ShadowsTokens[theme].sm,
        md: ShadowsTokens[theme].md,
        lg: ShadowsTokens[theme].lg,
        xl: ShadowsTokens[theme].xl,
    }
}

const Shadows: {
    Light: ArwaShadows,
    Dark: ArwaShadows,
} = {
    Light: getShadows('Light'),
    Dark: getShadows('Dark'),
}

export default Shadows
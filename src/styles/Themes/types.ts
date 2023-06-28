import type {ArwaColors} from "../colors/types"
import { ShadowsTokens } from "../../tokens"

type Shadows = ShadowsTokens.Light | ShadowsTokens.Dark

export type ArwaTheme = {
    colors: ArwaColors,
    shadows: {
        xs: Shadows,
        sm: Shadows,
        md: Shadows,
        lg: Shadows,
        xl: Shadows,
    }
}
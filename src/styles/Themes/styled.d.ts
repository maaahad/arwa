import type { ArwaColors } from '../colors/types'
import { ShadowsTokens } from '../../tokens'
import 'styled-components'

declare module 'styled-components' {
    export interface ArwaTheme {
        colors: ArwaColors,
        shadows: {
            xs: Shadows,
            sm: Shadows,
            md: Shadows,
            lg: Shadows,
            xl: Shadows,
        }
    }
}
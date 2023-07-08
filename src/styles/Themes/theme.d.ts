import type { ArwaColors } from '../colors/types'
import { ShadowsTokens } from '../../tokens'
import 'styled-components'
import { FontTokens } from '../../tokens'
import { ArwaShadows } from '../shadows/types'
import { ArwaTypography } from '../typography/types'


declare module 'styled-components' {

    // FIXME: this might be move to typography
    type Typography = {
        fontSize: FontTokens.FontSize
        fontWeight: FontTokens.FontWeight
        lineHeight: FontTokens.LineHeight
        // letterSpacing: FontTokens.LetterSpacing // FIXME: should be fixed later
    }

    export interface DefaultTheme {
        colors: ArwaColors, // rename it to palette???
        shadows: ArwaShadows,
        typography: ArwaTypography

        // TODO: Reference: https://mui.com/material-ui/customization/default-theme/
        // breakpoints
        // spacing
        // shape (border radius)
        // transitions
        // zIndex
        // typography
            // default 
            // h1-h6 (fontWeight, fontSize, lineHeight, letterSpacing)
            // Paragraph, caption, overline, button etc (fontWeight, fontSize, lineHeight, letterSpacing)

    }
}
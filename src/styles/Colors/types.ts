
import type { ColorTokensLight } from "../../tokens"
// FIXME: generic type generation
// Integrate with Tokens
type ArwaColors = {
    light: {
        primary: {
            main: ColorTokensLight, 
            hover: ColorTokensLight,
        },
        secondary: {
            main: ColorTokensLight, 
            hover: ColorTokensLight,
        },
        text: {
            body: {
                primary: ColorTokensLight,
                secondary: ColorTokensLight,
            }
            button: {
                primary: ColorTokensLight,
                secondary: ColorTokensLight,
            }
        },
        border: {
            main: ColorTokensLight,
            hover: ColorTokensLight
        },
        background: ColorTokensLight,
        surface: ColorTokensLight,
        ghost: ColorTokensLight, 
        icon: ColorTokensLight,
        backdrop: ColorTokensLight,
    }
}

export default ArwaColors
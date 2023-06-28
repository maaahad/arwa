import { ColorTokens } from "../../tokens"

// FIXME: generic type generation
// Integrate with Tokens
type ArwaColors = {
    light: {
        primary: {
            main: ColorTokens.Light, 
            hover: ColorTokens.Light,
        },
        secondary: {
            main: ColorTokens.Light, 
            hover: ColorTokens.Light,
        },
        text: {
            body: {
                primary: ColorTokens.Light,
                secondary: ColorTokens.Light,
            }
            button: {
                primary: ColorTokens.Light,
                secondary: ColorTokens.Light,
            }
        },
        border: {
            main: ColorTokens.Light,
            hover: ColorTokens.Light
        },
        background: ColorTokens.Light,
        surface: ColorTokens.Light,
        ghost: ColorTokens.Light, 
        icon: ColorTokens.Light,
        backdrop: ColorTokens.Light,
    }
}

export default ArwaColors
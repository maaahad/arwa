
import type ArwaColors from "./types";
import { ColorTokens } from "../../tokens";

const Colors: ArwaColors = {
    light: {
        primary: {
            main: ColorTokens.Light.piccolo,
            hover: ColorTokens.Light.piccolo, // FIXME:
        },
        secondary: {
            main: ColorTokens.Light.hit,
            hover: ColorTokens.Light.hit, // FIXME:
        },
        text: {
            body: {
                primary: ColorTokens.Light.bulma,
                secondary: ColorTokens.Light.trunks,
            },
            button: {
                primary: ColorTokens.Light.goten,
                secondary: ColorTokens.Light.popo
            }
        },
        border: {
            main: ColorTokens.Light.beerus,
            hover: ColorTokens.Light.beerus, // FIXME:
        },
        background: ColorTokens.Light.goku,
        surface: ColorTokens.Light.gohan,
        ghost: ColorTokens.Light.ghost,
        icon: ColorTokens.Light.trunks,
        backdrop: ColorTokens.Light.backdrop
    }
}
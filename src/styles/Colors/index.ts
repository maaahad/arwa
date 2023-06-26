import { ColorTokensLight } from "../../tokens";
import type ArwaColors from "./types";

const Colors: ArwaColors = {
    light: {
        primary: {
            main: ColorTokensLight.piccolo,
            hover: ColorTokensLight.piccolo, // FIXME:
        },
        secondary: {
            main: ColorTokensLight.hit,
            hover: ColorTokensLight.hit, // FIXME:
        },
        text: {
            body: {
                primary: ColorTokensLight.bulma,
                secondary: ColorTokensLight.trunks,
            },
            button: {
                primary: ColorTokensLight.goten,
                secondary: ColorTokensLight.popo
            }
        },
        border: {
            main: ColorTokensLight.beerus,
            hover: ColorTokensLight.beerus, // FIXME:
        },
        background: ColorTokensLight.goku,
        surface: ColorTokensLight.gohan,
        ghost: ColorTokensLight.ghost,
        icon: ColorTokensLight.trunks,
        backdrop: ColorTokensLight.backdrop
    }
}
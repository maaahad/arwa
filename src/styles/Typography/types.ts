import { FontTokens } from "../../tokens"

type T = {
    fontSize: FontTokens.FontSize
    fontWeight: FontTokens.FontWeight
    lineHeight: FontTokens.LineHeight
    // letterSpacing: FontTokens.LetterSpacing // FIXME: should be fixed later
}

export type ArwaTypography = {
    h1: T
}
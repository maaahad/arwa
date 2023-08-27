import { type TypographySize } from './types'
import { FontTokens } from '../../tokens'

type TypographySizeMappingType = {
  [key in TypographySize]: FontTokens.FontSize;
}

const TypographySizeMapping: TypographySizeMappingType = {
  '3xs': FontTokens.FontSize.fs10,
  '2xs': FontTokens.FontSize.fs12,
  xs: FontTokens.FontSize.fs14,
  sm: FontTokens.FontSize.fs16,
  md: FontTokens.FontSize.fs18,
  lg: FontTokens.FontSize.fs20,
  xl: FontTokens.FontSize.fs24,
  '2xl': FontTokens.FontSize.fs32,
  '3xl': FontTokens.FontSize.fs40,
  '4xl': FontTokens.FontSize.fs48,
  '5xl': FontTokens.FontSize.fs56,
  '6xl': FontTokens.FontSize.fs64,
  '7xl': FontTokens.FontSize.fs72
}

export const getFontSize = (size: TypographySize): FontTokens.FontSize =>
  TypographySizeMapping[size]

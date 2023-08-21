import { ArwaTypography } from "./types";
import { FontTokens } from "../../tokens";

export { default as Heading1 } from "./Heading1";

const Typography: ArwaTypography = {
  // FIXME: proper value for h1-h6 (default), Paragraph
  // if size props provided, handled in applyFontSize util
  h1: {
    fontSize: FontTokens.FontSize.fs32,
    fontWeight: FontTokens.FontWeight.semiBold,
    lineHeight: FontTokens.LineHeight.lh1_5,
  },
  fontWeight: {
    regular: FontTokens.FontWeight.regular,
    semiBold: FontTokens.FontWeight.semiBold,
    bold: FontTokens.FontWeight.bold,
  },
};

export default Typography;

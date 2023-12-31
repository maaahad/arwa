import { ColorTokens } from "../../tokens";
import { type ArwaColors } from "./types";

const getColors = (theme: "Light" | "Dark"): ArwaColors => {
  return {
    accent: {
      primary: ColorTokens[theme].piccolo,
      secondary: ColorTokens[theme].hit,
      error: ColorTokens.Supportive.chichi_100,
    },
    text: {
      body: {
        primary: ColorTokens[theme].bulma,
        secondary: ColorTokens[theme].trunks,
      },
      button: {
        primary: ColorTokens[theme].beerus,
        secondary: ColorTokens[theme].popo,
      },
    },
    hover: {
      primary: ColorTokens[theme].heles,
      secondary: ColorTokens[theme].jiren,
    },
    icon: ColorTokens[theme].trunks,
    border: ColorTokens[theme].beerus,
    background: ColorTokens[theme].goku,
    surface: ColorTokens[theme].gohan,
    backdrop: ColorTokens[theme].zeno,
  };
};

const Colors: {
  Light: ArwaColors;
  Dark: ArwaColors;
} = {
  Light: getColors("Light"),
  Dark: getColors("Dark"),
};

export default Colors;

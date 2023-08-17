import { ShapeTokens } from "../../tokens";

export type ArwaShapes = {
  borderRadius: {
    [key in keyof typeof ShapeTokens.BorderRadius]: ShapeTokens.BorderRadius;
  };
};

import { type ShapeTokens } from "../../tokens";

export interface ArwaShapes {
  borderRadius: {
    [key in keyof typeof ShapeTokens.BorderRadius]: ShapeTokens.BorderRadius;
  };
}

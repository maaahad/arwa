import { TransitionTokens } from "../../tokens";

export type ArwaTransitions = {
  [key in keyof typeof TransitionTokens.Transitions]: TransitionTokens.Transitions;
};

import { BreakpointTokens } from "../../tokens";
import { ArwaBreakpoints } from "./types";

export const Breakpoints: ArwaBreakpoints = {
    xs: BreakpointTokens.Breakpoints.xs,
    sm: BreakpointTokens.Breakpoints.sm,
    md: BreakpointTokens.Breakpoints.md,
    lg: BreakpointTokens.Breakpoints.lg,
    xl: BreakpointTokens.Breakpoints.xl,
    only: {
        sm: BreakpointTokens.Breakpoints.smOnly,
        md: BreakpointTokens.Breakpoints.mdOnly,
        lg: BreakpointTokens.Breakpoints.lgOnly,
    }
}
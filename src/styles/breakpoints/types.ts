import type { BreakpointTokens } from "../../tokens";

export type ArwaBreakpoints = {
    xs: BreakpointTokens.Breakpoints, 
    sm: BreakpointTokens.Breakpoints, 
    md: BreakpointTokens.Breakpoints, 
    lg: BreakpointTokens.Breakpoints, 
    xl: BreakpointTokens.Breakpoints,
    only: {
        sm: BreakpointTokens.Breakpoints,
        md: BreakpointTokens.Breakpoints,
        lg: BreakpointTokens.Breakpoints,
    } 
}
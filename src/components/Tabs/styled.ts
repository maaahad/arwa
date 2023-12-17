import styled, { css } from "styled-components";

// TODO(maaahad): apply variant styles
export const TabStyled = styled.button<{
  active?: boolean;
  variant?: "underline" | "pill" | "segment";
}>`
  ${({ theme: { colors }, active = false, variant = "underline" }) => css`
    all: unset;
    cursor: pointer;
    color: ${active ? colors.accent.primary : colors.text.body.primary};
  `}
`;

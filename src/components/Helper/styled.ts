import { styled, css } from "styled-components";

export const InputContainer = styled.div<{
  noBottomBorderRadius?: boolean;
  hasError?: boolean;
}>`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  height: 56px;
  ${({
    theme: { shapes, colors, transitions },
    noBottomBorderRadius = false,
    hasError = false,
  }) => css`
    border: 2px solid ${colors.border};
    border-radius: ${shapes.borderRadius.md};
    ${hasError &&
    css`
      border-color: ${colors.accent.error};
    `}
    &:focus-within {
      border-color: ${hasError ? colors.accent.error : colors.accent.primary};
    }

    transition:
      border-color ${transitions.arrival},
      border-radius ${transitions.departure};

    ${noBottomBorderRadius &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  `}
`;

import { styled, css } from "styled-components";
import { applyResponsiveCSS } from "../../styles/responsiveness";
import { type ResponsivePropDecleration } from "../../styles/responsiveness/types";

export const CarouselStyled = styled.div<ResponsivePropDecleration>`
  position: relative;
  overflow: hidden;
  ${applyResponsiveCSS}
  ${({ theme: { shapes } }) => css`
    border-radius: ${shapes.borderRadius.sm};
  `}
`;

export const ControlButtonStyled = styled.button<{
  slot: "left" | "right";
  round?: boolean;
  disabled?: boolean;
}>`
  cursor: pointer;
  position: absolute;
  width: 32px; // TODO: Configured
  height: 32px; // TODO: Configured
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({
    slot,
    round = false,
    disabled = false,
    theme: { colors, shapes, shadows },
  }) => css`
    border: 1px solid ${colors.border};
    border-radius: ${shapes.borderRadius.sm};
    box-shadow: ${shadows.xs};
    transition: all 0.3s ease-in; // TODO: Should come from theme
    ${round &&
    css`
      border-radius: 50%;
    `}

    ${slot === "left"
      ? css`
          left: 0px;
        `
      : css`
          right: 0px;
        `}

        ${disabled &&
    css`
      cursor: not-allowed;
      background-color: ${colors.background};
    `}

        &:hover {
      background-color: ${colors.background};
    }
  `}
`;

export const SlidesContainer = styled.div<{ scrollable?: boolean }>`
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: hidden;
  ${({ scrollable }) => css`
    overflow-x: ${scrollable ? "auto" : "hidden"};
  `}
`;

export const Slide = styled.div`
  & > * {
    height: 100%;
  }
`;

export const IndicatorsStyled = styled.div<{
  width: number;
  size: number;
  gap: number;
}>`
  position: absolute;
  bottom: 16px; // Should come from configuration
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-auto-flow: column;
  overflow-x: hidden;
  ${({ width, size, gap }) => css`
    max-width: ${width}px;
    gap: ${gap}px;
    grid-auto-columns: ${size}px;
    grid-auto-rows: ${size}px;
  `}
`;

export const IndicatorDot = styled.button<{
  selected?: boolean;
  translate: number;
}>`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: all 0.3s ease-in;
  ${({ theme: { colors }, selected = false, translate }) => css`
    background-color: ${selected ? colors.accent.primary : colors.surface};
    transform: translateX(${translate}px);
  `}
`;

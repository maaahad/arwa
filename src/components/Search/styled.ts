import { styled, css, keyframes } from "styled-components";
import { applyResponsiveCSS } from "../../styles/responsiveness";
import { type ResponsivePropDecleration } from "../../styles/responsiveness/types";

const pulse = keyframes`
  from {
    transform: scale(.99);
  }
  to {
    transform: scale(1);
  }
`;

export const SearchStyled = styled.div<
  Pick<ResponsivePropDecleration, "width">
>`
  ${applyResponsiveCSS}
`;

export const LeftSlot = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const Input = styled.input`
  all: unset;
  flex: 1;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  padding: 12px 4px;
  animation: ${pulse} 0.2s linear;
  ${({ theme: { colors, shapes, shadows } }) => css`
    box-shadow: ${shadows.lg};
    border: 1px solid ${colors.border};
    border-radius: ${shapes.borderRadius.lg};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  `}
`;

export const DropdownItem = styled.div<{ selectable?: boolean }>`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ theme: { colors, shapes }, selectable = true }) => css`
    ${!selectable &&
    css`
      color: ${colors.text.body.secondary};
    `}
    ${selectable &&
    css`
      border-radius: ${shapes.borderRadius.sm};
      &:hover {
        background-color: ${colors.background};
      }
    `}
  `}
`;

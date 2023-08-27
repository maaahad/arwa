import { styled, css } from "styled-components";
import { applyResponsiveCSS } from "../../styles/responsiveness";
import { type ResponsivePropDecleration } from "../../styles/responsiveness/types";

export const SearchStyled = styled.div<
  Pick<ResponsivePropDecleration, "width">
>`
  ${applyResponsiveCSS}
`;

export const InputContainer = styled.div<{ hasSearchResults?: boolean }>`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  height: 56px;
  ${({ theme: { shapes, colors }, hasSearchResults = false }) => css`
    border: 1px solid ${colors.border};
    border-radius: ${shapes.borderRadius.md};
    &:focus-within {
      border-color: ${colors.accent.primary};
    }

    /* TODO: use theme */
    transition: all 0.3s ease-in;

    ${hasSearchResults &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  `}
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
  ${({ theme: { colors, shapes } }) => css`
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

import { styled, css } from "styled-components";
import { ColorTokens } from "../../tokens";

export const InputContainer = styled.div<{ hasSearchResults?: boolean }>`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  height: 56px;
  ${({ theme: { shapes, colors }, hasSearchResults = false }) => css`
    border: 2px solid ${colors.border};
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
`
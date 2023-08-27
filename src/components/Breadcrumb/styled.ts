import { styled, css } from 'styled-components'

export const BreadcrumbStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`

export const BreadcrumbItemStyled = styled.a<{ active?: boolean }>`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 4px;
  /* TODO: fix typography */
  ${({
    theme: {
      colors,
      typography: { fontWeight }
    },
    active = false
  }) => css`
    color: ${active ? colors.text.body.primary : colors.text.body.secondary};
    ${active &&
    css`
      font-weight: ${fontWeight.bold};
    `}
  `}
`

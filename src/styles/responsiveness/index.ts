import { DefaultTheme } from "styled-components"
import { ResponsiveDecleration, CSSProperty } from "./types"

// selectors, declerations, property: value

export const applyResponsiveness = ({
 theme, 
 ...responsiveProps   
}: {
    theme: DefaultTheme;
    responsiveProps: ResponsiveDecleration
}) => {

}
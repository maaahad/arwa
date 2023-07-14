import React, { PropsWithChildren, ReactElement, ReactNode, useState } from "react"
import { css, styled } from "styled-components"
import { FontTokens } from "../../tokens"
import { AccordionStyled, AccordionItemStyled, AccordionHeader, AccordionDetails, AccordionIconContainer } from "./styled"
import { Icons } from "../.."

// TODO Accordion, AccordionItem, AccordionHeader, AccordionContent, AccordionButton

const Title = styled.h3`
    margin: 0;
    font-size: ${FontTokens.FontSize.fs16};
    font-weight: ${FontTokens.FontWeight.bold};
    line-height: ${FontTokens.LineHeight.lh1_5};
`

type AccordionProps = {
    expandAll?: boolean
}

type AccordionItemProps = {
    title: string
    icon?: ReactElement
}


const AccordionItem: React.FC<PropsWithChildren<AccordionItemProps>> = ({children, title, icon = <Icons.DownArrow/>}) => {
    const [expanded, setExpanded] = useState<boolean>(false)

    const handleExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <AccordionItemStyled>
            <AccordionHeader onClick={handleExpand}>
                <Title>{title}</Title>
                <AccordionIconContainer expanded={expanded}>
                    {icon}
                </AccordionIconContainer>
            </AccordionHeader>
            <AccordionDetails expanded={expanded}>
                {children}
            </AccordionDetails>
        </AccordionItemStyled>
    )
}

const Accordion:React.FC<PropsWithChildren<AccordionProps>> = ({children, expandAll = false}) => {
    return (
        <AccordionStyled>
            {children}
        </AccordionStyled>
    )
}

export default Accordion

export {
    AccordionItem
}

// TODO:
// Accordion.AccordionItem
// Accordion.AccordionHeader
// Accordion.AccordionContent
// Accordion.AccordionButton
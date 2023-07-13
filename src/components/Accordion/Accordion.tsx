import React, { PropsWithChildren, ReactNode, useState } from "react"
import { css, styled } from "styled-components"
import { FontTokens } from "../../tokens"
import { AccordionStyled, AccordionItemStyled, AccordionHeader, AccordionDetails } from "./styled"

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
}


const AccordionItem: React.FC<PropsWithChildren<AccordionItemProps>> = ({children, title}) => {
    const [expanded, setExpanded] = useState<boolean>(false)

    const handleExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <AccordionItemStyled>
            <AccordionHeader onClick={handleExpand}>
                <Title>{title}</Title>
                <div>Icon</div>
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
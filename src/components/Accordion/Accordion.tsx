import React, { PropsWithChildren, ReactNode, useState } from "react"
import { css, styled } from "styled-components"
import { FontTokens } from "../../tokens"
import { AccordionStyled, AccordionItem } from "./styled"

// TODO Accordion, AccordionItem, AccordionHeader, AccordionContent, AccordionButton


const AccordionHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`


const Title = styled.h3`
    margin: 0;
    font-size: ${FontTokens.FontSize.fs16};
    font-weight: ${FontTokens.FontWeight.bold};
    line-height: ${FontTokens.LineHeight.lh1_5};
`

type AccordionProps = {
    expandAll?: boolean
}

const Accordion:React.FC<PropsWithChildren<AccordionProps>> = ({children, expandAll = false}) => {
    return (
        <AccordionStyled>
            {children}
        </AccordionStyled>
    )
}


const AccordionOLD: React.FC<{defaultOpen?: boolean}> = ({defaultOpen = false}) => {
    const [open, setOpen] = useState<boolean>(defaultOpen)

    const handleOpen: React.MouseEventHandler<HTMLButtonElement> = () => {
        setOpen(!open)
    }

    return (
        <AccordionStyled>
            <AccordionHeader>
                <Title>This is a sample accordion Title</Title>
                <button onClick={handleOpen}>ToDo:Tog</button>
            </AccordionHeader>
            {
                open && (
                    <div>
                        This is suppose to be Content       
                    </div>
                )
            }
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
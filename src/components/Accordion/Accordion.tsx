import React, { useState } from "react"
import { css, styled } from "styled-components"
import { FontTokens } from "../../tokens"

// TODO Accordion, AccordionItem, AccordionHeader, AccordionContent, AccordionButton

const AccordionStyled = styled.div`
    ${({theme: {shapes, colors}}) => css`
        padding: 16px; // TODO: move to a const file
        border-radius: ${shapes.borderRadius.sm};
        background-color: ${colors.background};
    `}
`


const AccordionItem = styled.div`

`

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



const Accordion: React.FC<{defaultOpen?: boolean}> = ({defaultOpen = false}) => {
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


// TODO:
// Accordion.AccordionItem
// Accordion.AccordionHeader
// Accordion.AccordionContent
// Accordion.AccordionButton
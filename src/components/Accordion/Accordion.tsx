import React, { useState } from "react"
import { css, styled } from "styled-components"

// TODO Accordion, AccordionItem, AccordionHeader, AccordionContent, AccordionButton


// FIXME: Move styeld components to separate files
const AccordionStyled = styled.div`
    ${({theme}) => css`
        border-radius: 8px; // !FIXME: in the theme
        padding: 16px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `}
`


const AccordionHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Accordion: React.FC<{defaultOpen?: boolean}> = ({defaultOpen = false}) => {
    const [open, setOpen] = useState<boolean>(defaultOpen)

    const handleOpen: React.MouseEventHandler<HTMLButtonElement> = () => {
        setOpen(!open)
    }

    return (
        <AccordionStyled>
            <AccordionHeader>
                <p>Title</p>
                <button onClick={handleOpen}>Toggle content</button>
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

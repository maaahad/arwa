import React, { Children, PropsWithChildren, ReactElement, useState, cloneElement } from "react"
import { AccordionStyled, AccordionItemStyled, AccordionHeader, AccordionContentStyled, AccordionIconContainer, Title } from "./styled"
import { Icons } from "../.."


type ItemSize = 'sm' | 'md' | 'lg' | 'xl'

type AccordionProps = {
    singleOpen?: false 
    itemSize?: ItemSize
}

type AccordionItemProps = {
    title: string
    icon?: ReactElement
    disabled?: boolean
}

type AccordionContentProps = {
    expanded?: boolean
}




const AccordionContent: React.FC<PropsWithChildren<AccordionContentProps>> = ({children, expanded = false}) => {
    return (
        <AccordionContentStyled expanded={expanded}>
            {children}
        </AccordionContentStyled>
    )
} 

const AccordionItem: React.FC<PropsWithChildren<AccordionItemProps>> = ({children, title, disabled = false, icon = <Icons.DownArrow/>}) => {
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
            <AccordionContent expanded={expanded}>
                {children}
            </AccordionContent>
        </AccordionItemStyled>
    )
}

// TODO: use JS to control expand transition
// Ref: https://css-tricks.com/using-css-transitions-auto-dimensions/

const Accordion:React.FC<PropsWithChildren<AccordionProps>> = ({children, singleOpen}) => {
    // TODO: need to control expand from parent
    // Need to pass expanded/expand props to children

    return (
        <AccordionStyled>
            {/* {
                Children.map(children, (child, index) => cloneElement(child, {test: 'This is test'}))

            } */}
            {children}
        </AccordionStyled>
    )
}

export default Accordion

export {
    AccordionItem,
    AccordionContent
}
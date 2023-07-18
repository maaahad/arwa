import React, { Children, PropsWithChildren, ReactElement, useState, cloneElement, ReactNode } from "react"
import { AccordionStyled, AccordionItemStyled, AccordionHeader, AccordionContentStyled, AccordionIconContainer, Title } from "./styled"
import { Icons } from "../.."


type ItemSize = 'sm' | 'md' | 'lg' | 'xl'

type AccordionProps = {
    singleOpen?: boolean 
    itemSize?: ItemSize
}

type AccordionItemProps = {
    title: string
    icon?: ReactElement
    disabled?: boolean
    expand?: boolean
    onToggle?: () => void
}

type AccordionContentProps = {
    expand?: boolean
}




const AccordionContent: React.FC<PropsWithChildren<AccordionContentProps>> = ({children, expand = false}) => {
    return (
        <AccordionContentStyled expand={expand}>
            {children}
        </AccordionContentStyled>
    )
} 

const AccordionItem: React.FC<PropsWithChildren<AccordionItemProps>> = ({children, title, onToggle = () => {}, expand = false, disabled = false, icon = <Icons.DownArrow/>}) => {
    return (
        <AccordionItemStyled>
            <AccordionHeader onClick={onToggle}>
                <Title>{title}</Title>
                <AccordionIconContainer expand={expand}>
                    {icon}
                </AccordionIconContainer>
            </AccordionHeader>
            <AccordionContent expand={expand}>
                {children}
            </AccordionContent>
        </AccordionItemStyled>
    )
}

// TODO: use JS to control expand transition
// Ref: https://css-tricks.com/using-css-transitions-auto-dimensions/

const Accordion:React.FC<PropsWithChildren<AccordionProps>> = ({children, singleOpen = false}) => {
    const childrenArray = Children.toArray(children) as ReactElement[]
    const [expandStatus, setExpandStatus]  = useState<boolean[]>(childrenArray.map(() => false))

    // TODO: cleanup
    const handleToggle = (index: number) => {  
        if(singleOpen) {
            setExpandStatus(expandStatus.map((v, i) => {
                if(i === index) return !v 
                return false
            }))
        }
        else {
            setExpandStatus(expandStatus.map((v, i) => {
                if(i === index) return !v 
                return v
            }))
        }
    }

    console.log(expandStatus)

    return (
        <AccordionStyled>
            {
                childrenArray.map(((child, index) => cloneElement(child, {onToggle: () => handleToggle(index), expand: expandStatus[index]})))
            }
            {/* {children} */}
        </AccordionStyled>
    )
}

export default Accordion

export {
    AccordionItem,
    AccordionContent
}
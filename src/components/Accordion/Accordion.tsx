import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  useState,
  cloneElement,
  ReactNode,
} from "react";
import {
  AccordionStyled,
  AccordionItemStyled,
  AccordionHeader,
  AccordionContentStyled,
  AccordionIconContainer,
  Title,
} from "./styled";
import { Icons } from "../..";

type ItemSize = "sm" | "md" | "lg" | "xl";

type AccordionProps = {
  singleOpen?: boolean;
  itemSize?: ItemSize;
};

type AccordionItemProps = {
  title: string;
  toggleIcon?: ReactElement;
  disabled?: boolean;
  expand?: boolean;
  onToggle?: () => void;
  outside?: boolean;
};

type AccordionContentProps = {
  expand?: boolean;
  outside?: boolean;
};

const AccordionContent: React.FC<PropsWithChildren<AccordionContentProps>> = ({
  children,
  expand = false,
  outside = false,
}) => {
  return (
    <AccordionContentStyled expand={expand} outside={outside}>
      {children}
    </AccordionContentStyled>
  );
};

const AccordionItem: React.FC<PropsWithChildren<AccordionItemProps>> = ({
  children,
  title,
  onToggle = () => {},
  expand = false,
  disabled = false,
  outside = false,
  toggleIcon = <Icons.ChevronDown />,
}) => {
  return (
    <AccordionItemStyled expand={expand} outside={outside}>
      <AccordionHeader
        disabled={disabled}
        onClick={disabled ? undefined : onToggle}
        expand={expand}
        outside={outside}
      >
        <Title>{title}</Title>
        <AccordionIconContainer expand={expand}>
          {toggleIcon}
        </AccordionIconContainer>
      </AccordionHeader>
      <AccordionContent expand={expand} outside={outside}>
        {children}
      </AccordionContent>
    </AccordionItemStyled>
  );
};

// TODO: use JS to control expand transition
// Ref: https://css-tricks.com/using-css-transitions-auto-dimensions/
const Accordion: React.FC<PropsWithChildren<AccordionProps>> = ({
  children,
  singleOpen = false,
}) => {
  const childrenArray = Children.toArray(children) as ReactElement[];
  const [expandStatus, setExpandStatus] = useState<boolean[]>(
    childrenArray.map(() => false),
  );

  const handleToggle = (index: number) => {
    if (singleOpen) {
      setExpandStatus(
        expandStatus.map((v, i) => {
          if (i === index) return !v;
          return false;
        }),
      );
    } else {
      setExpandStatus(
        expandStatus.map((v, i) => {
          if (i === index) return !v;
          return v;
        }),
      );
    }
  };

  return (
    <AccordionStyled>
      {childrenArray.map((child, index) =>
        cloneElement(child, {
          onToggle: () => handleToggle(index),
          expand: expandStatus[index],
        }),
      )}
    </AccordionStyled>
  );
};

export default Accordion;

export { AccordionItem, AccordionContent };

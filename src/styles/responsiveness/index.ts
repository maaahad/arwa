import { DefaultTheme } from "styled-components";
import {
  ResponsiveDecleration,
  CSSProperty,
  ResponsiveCSSDecleration,
} from "./types";

export const getResponsiveCSSPropertyValue = (
  value: string | number,
): string | `${number}px` => {
  if (typeof value === "number") return `${value}px`;
  return value;
};

export const applyResponsiveness = ({
  theme,
  ...responsiveProps
}: {
  theme: DefaultTheme;
} & ResponsiveDecleration) => {
  const { breakpoints, device } = theme;

  return Object.entries(responsiveProps).reduce((acc, cur) => {
    const [key, value] = cur;
    const cssProperty = CSSProperty[key as keyof typeof CSSProperty];

    if (Array.isArray(value)) {
      value.forEach((v, index) => {
        if (index === 0)
          return (acc = {
            [cssProperty]: getResponsiveCSSPropertyValue(v),
            ...acc,
          });

        const media = breakpoints[device[index]];

        acc[media] = {
          ...((acc[media] || {}) as Record<string, string>),
          [cssProperty]: getResponsiveCSSPropertyValue(v),
        };
      });
    } else {
      acc = {
        [cssProperty]: getResponsiveCSSPropertyValue(value),
        ...acc,
      };
    }

    return acc;
  }, {} as ResponsiveCSSDecleration);
};

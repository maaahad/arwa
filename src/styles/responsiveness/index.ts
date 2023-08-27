import { type DefaultTheme } from "styled-components";
import {
  type ResponsivePropDecleration,
  CSSProperty,
  type ResponsiveCSSDeclerations,
} from "./types";

export const getResponsiveCSSPropertyValue = (
  value: string | number,
): string | `${number}px` => {
  if (typeof value === "number") return `${value}px`;
  return value;
};

export const applyResponsiveCSS = ({
  theme,
  ...responsiveProps
}: {
  theme: DefaultTheme;
} & ResponsivePropDecleration) => {
  const { breakpoints, device } = theme;

  return Object.entries(responsiveProps).reduce<ResponsiveCSSDeclerations>(
    (acc, cur) => {
      const [key, value] = cur;

      const cssProperty = CSSProperty[key as keyof typeof CSSProperty];

      if (!value || !cssProperty) return acc;

      if (Array.isArray(value)) {
        value.forEach((v, index) => {
          if (index === 0) {
            return (acc = {
              [cssProperty]: getResponsiveCSSPropertyValue(v),
              ...acc,
            });
          }

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
    },
    {},
  );
};

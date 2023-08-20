import React from "react";
import { IconProps, IconSize } from "./types";
import { ColorTokens } from "../../tokens";

const ArrowRight: React.FC<IconProps> = ({
  size = "md",
  color = ColorTokens.Light.bulma,
}) => {
  return (
    <svg
      width={IconSize[size]}
      height={IconSize[size]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 16.0037L25.9964 15.9999M25.9964 15.9999L20.6128 10.6143M25.9964 15.9999L20.6128 21.3854"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;

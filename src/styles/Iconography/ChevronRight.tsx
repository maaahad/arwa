import React from "react";
import { IconProps, IconSize } from "./types";

const ChevronRight: React.FC<IconProps> = ({ size = "md" }) => {
  return (
    <svg
      width={IconSize[size]}
      height={IconSize[size]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 10L19 16L13 22"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;

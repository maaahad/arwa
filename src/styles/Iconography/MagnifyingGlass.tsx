import React from "react";
import { IconProps, IconSize } from "./types";
import { ColorTokens } from "../../tokens";

const MagnifyingGlass: React.FC<IconProps> = ({
  size = "md",
  color = ColorTokens.Light.bulma,
}) => {
  return (
    <svg
      width={IconSize[size]}
      height={IconSize[size]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2212 5.75C8.19952 5.75 5.75 8.19952 5.75 11.2212C5.75 14.2428 8.19952 16.6923 11.2212 16.6923C12.7307 16.6923 14.0966 16.0816 15.0871 15.0926C16.0793 14.1018 16.6923 12.7335 16.6923 11.2212C16.6923 8.19952 14.2428 5.75 11.2212 5.75ZM4.75 11.2212C4.75 7.64723 7.64723 4.75 11.2212 4.75C14.7951 4.75 17.6923 7.64723 17.6923 11.2212C17.6923 12.8293 17.1051 14.3011 16.1344 15.4327L19.1032 18.3961C19.2987 18.5912 19.299 18.9078 19.1039 19.1032C18.9088 19.2987 18.5922 19.299 18.3968 19.1039L15.4268 16.1394C14.296 17.1072 12.8265 17.6923 11.2212 17.6923C7.64723 17.6923 4.75 14.7951 4.75 11.2212Z"
        fill={color}
      />
    </svg>
  );
};

export default MagnifyingGlass;

import React from "react";
import { IconProps, IconSize } from "./types";
import { ColorTokens } from "../../tokens";

const Close: React.FC<IconProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7C11.0294 7 7 11.0294 7 16C7 20.9706 11.0294 25 16 25C20.9706 25 25 20.9706 25 16C25 11.0294 20.9706 7 16 7ZM6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9472 11.9926C12.1425 11.7974 12.4591 11.7974 12.6543 11.9926L16.0001 15.3384L19.3458 11.9926C19.541 11.7974 19.8576 11.7974 20.0529 11.9926C20.2482 12.1879 20.2482 12.5045 20.0529 12.6998L16.7072 16.0455L20.0529 19.3912C20.2482 19.5865 20.2482 19.903 20.0529 20.0983C19.8576 20.2936 19.541 20.2936 19.3458 20.0983L16.0001 16.7526L12.6543 20.0983C12.4591 20.2936 12.1425 20.2936 11.9472 20.0983C11.752 19.9031 11.752 19.5865 11.9472 19.3912L15.293 16.0455L11.9472 12.6997C11.752 12.5045 11.752 12.1879 11.9472 11.9926Z"
        fill={color}
      />
    </svg>
  );
};

export default Close;

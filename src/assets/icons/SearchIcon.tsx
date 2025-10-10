import React from "react";

interface UserIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const SearchIcon: React.FC<UserIconProps> = ({
  width = 16,
  height = 16,
  className = "searchIcon",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
<path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="#0F0F10" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  );
};
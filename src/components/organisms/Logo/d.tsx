import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  width?: number;
  height?: number;
}

export default function D({ width = 32, height = 32, ...rest }: Props) {
  return (
    <svg
      width={width}
      height={height * 2}
      viewBox="0 0 154 308"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M154 231V280.207C154 281.569 153.459 282.874 152.496 283.837L137.096 299.237C133.863 302.471 130.823 296.235 126.264 296.6C122.299 296.916 110.733 308 77 308C34.4741 308 0 273.526 0 231C0 188.474 34.4741 154 77 154C128.333 154 128.333 179.667 128.333 154V22C128.333 9.84974 138.183 0 150.333 0C152.358 0 154 1.64162 154 3.66667V231ZM128.333 231C128.333 202.649 105.351 179.667 77 179.667C48.6494 179.667 25.6667 202.649 25.6667 231C25.6667 259.351 48.6494 282.333 77 282.333C105.351 282.333 128.333 259.351 128.333 231Z"
        fill="#B4CFC1"
      />
    </svg>
  );
}

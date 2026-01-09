import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  width?: number;
  height?: number;
}

export default function I({ width = 32, height = 32, ...rest }: Props) {
  return (
    <svg
      width={width / 5.5}
      height={height}
      viewBox="0 0 28 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0647 153.003L1.51785 136.553C0.545988 135.525 0 134.13 0 132.676V80.1135V3.91666C0 1.75354 1.65727 0 3.70163 0C14.5685 0 23.6125 8.2578 25.5345 19.1663C25.782 20.5709 25.9114 22.0194 25.9114 23.5V80.1135C25.9114 81.2944 25.9466 82.4666 26.0161 83.6289L27.8246 144.302C27.9181 147.437 25.225 150.529 22.6487 152.318C20.648 153.708 18.8869 154.931 17.0647 153.003Z"
        fill="#B4CFC1"
      />
    </svg>
  );
}

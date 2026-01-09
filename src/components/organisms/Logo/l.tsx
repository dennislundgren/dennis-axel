import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  width?: number;
  height?: number;
}

export default function L({ width = 32, height = 32, ...rest }: Props) {
  return (
    <svg
      width={width / 5.5}
      height={height * 1.9545454545}
      viewBox="0 0 28 301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.7197 280.207V231V3.66667C27.7197 1.64162 26.0781 0 24.0531 0C11.9028 0 2.05306 9.84974 2.05306 22V154C2.05306 157.3 2.05306 159.751 1.94399 161.517L1.08089 221.007L0.92865 231.5L0.769674 242.457L9.34601e-05 295.501C-0.00845718 296.09 0.496763 296.552 1.08035 296.635C2.63343 296.855 4.0084 297.758 5.28487 298.596C7.26676 299.897 9.0112 301.042 10.8162 299.237L26.2162 283.837C27.1789 282.874 27.7197 281.569 27.7197 280.207Z"
        fill="#B4CFC1"
      />
    </svg>
  );
}

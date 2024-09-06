import { forwardRef, SVGProps } from "react";

export const Icon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          fill="#005BFF"
          d="M40 20v20H20.003v20H60V40c0-11.067-8.933-20-20-20Z"
        />
        <path
          fill="#00E2C5"
          d="M19.999 20h19.999c0-11.067-8.933-20-19.999-20H0v40h19.999V20Z"
        />
      </svg>
    );
  },
);

Icon.displayName = "Icon";

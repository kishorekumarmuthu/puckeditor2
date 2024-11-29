import React from "react";
import { ComponentConfig } from "@/core"; // assuming ComponentConfig is from your core library

export type IconProps = {
  size?: string; // Size as a string (e.g., "24px", "48px")
  color?: string; // Color as a string (e.g., "black", "blue")
};

type DefaultProps = {
  size: string; // default size (e.g., "24px")
  color: string; // default color (e.g., "black")
};

type RenderFunction = (props: IconProps) => JSX.Element;

export const ExportIcon2: ComponentConfig<IconProps> = {
  label: "Export Icon",
  fields: {
    size: {
      type: "text",
    },
    color: {
      type: "text",
    },
  },
  defaultProps: {
    size: "24px",
    color: "black",
  } as DefaultProps,
  render: ({ size, color }: IconProps): JSX.Element => {
    return (
      <div
        style={{
          fontSize: size,
          color: color,
        }}
      >
        {/* Simple export icon using SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          width={size}
          height={size}
        >
          <path
            d="M4 12l1.41 1.41L10 9.83V20h2V9.83l4.59 4.58L20 12l-8-8-8 8z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  },
};

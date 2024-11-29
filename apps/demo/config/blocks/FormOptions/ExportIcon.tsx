// // import React from "react";

// // // Define the props that the icon will accept
// // type ExportIconProps = {
// //   size?: string; // Optional size prop (e.g., "24px", "48px")
// //   color?: string; // Optional color prop (e.g., "black", "blue")
// // };

// // // Define the ExportIcon component
// // const ExportIcon2 = () => {
// //   return (
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       width="24px"
// //       height="24px"
// //       style={{ color: "black" }}
// //     >
// //       <path
// //         d="M4 12l1.41 1.41L10 9.83V20h2V9.83l4.59 4.58L20 12l-8-8-8 8z"
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       />
// //     </svg>
// //   );
// // };

// // export default ExportIcon2;

// import React from "react";

// // Define the props that the icon will accept
// type ExportIconProps = {
//   size?: string; // Optional size prop (e.g., "24px", "48px")
//   color?: string; // Optional color prop (e.g., "black", "blue")
// };

// // Define the ExportIcon component
// const ExportIcon: React.FC<ExportIconProps> = ({
//   size = "24px",
//   color = "black",
// }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       width={size}
//       height={size}
//       style={{ color }}
//     >
//       {/* Export icon path */}
//       <path
//         d="M4 12l1.41 1.41L10 9.83V20h2V9.83l4.59 4.58L20 12l-8-8-8 8z"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// };

// export default ExportIcon;

import React from "react";

import { ComponentConfig } from "@/core";
import { Heading as _Heading } from "@/core/components/Heading";
import type { HeadingProps as _HeadingProps } from "@/core/components/Heading";
import { Section } from "../../components/Section";

// export type CustomIconProps = {
//   align?: "left" | "center" | "right";
//   size?: string;
//   padding?: string;
// };

// const sizeOptions = [
//   { value: "xxxl", label: "XXXL" },
//   { value: "xxl", label: "XXL" },
//   { value: "xl", label: "XL" },
//   { value: "l", label: "L" },
//   { value: "m", label: "M" },
//   { value: "s", label: "S" },
//   { value: "xs", label: "XS" },
// ];

export type CustomIconProps = {
  label?: string;
};

export const ExportIcon: ComponentConfig = {
  fields: {
    label: {
      type: "text",
    },
  },
  // fields: {
  //   size: {
  //     type: "select",
  //     options: sizeOptions,
  //   },
  //   align: {
  //     type: "radio",
  //     options: [
  //       { label: "Left", value: "left" },
  //       { label: "Center", value: "center" },
  //       { label: "Right", value: "right" },
  //     ],
  //   },
  //   padding: { type: "text" },
  // },
  // defaultProps: {
  //   align: "left",
  //   padding: "24px",
  //   size: "m",
  // },
  render: ({ label, align, size, padding }) => {
    // this render will work only when we drag and drop the component from components list.
    return (
      <>
        <label style={{ color: "red" }}>{label}</label>
        <div style={{ color: "black" }}>"this is icon area2"</div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          width="100px"
          height="100px"
          // width={size}
          // height={size}
          //style={{ textAlign: align, padding: padding }}
          style={{ color: "red" }}
        >
        <path
            d="M4 12l1.41 1.41L10 9.83V20h2V9.83l4.59 4.58L20 12l-8-8-8 8z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>  */}

        {/* <Section padding={padding}>
        <_Heading size={size} rank={level as any}>
          <span style={{ display: "block", textAlign: align, width: "100%" }}>
            {text}
          </span>
        </_Heading>
      </Section> */}
      </>
    );
  },
};

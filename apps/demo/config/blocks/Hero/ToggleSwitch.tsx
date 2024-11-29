import React, { useState, useContext } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import Client from "../../../app/[...puckPath]/client";

export type MyContextType = {
  isChecked: boolean;
  setIsChecked: (newValue: boolean) => void;
};

export const MyContext = createContext<MyContextType | null>(null);

// export const useToggleCustomHook = () => {
//   const [isChecked, setIsChecked] = useState<boolean>(false);
//   // do some stuff
//   return { isChecked, setIsChecked };
// };

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  //const { isChecked, setIsChecked } = useToggleCustomHook();

  return (
    <MyContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

const ToggleSwitch = () => {
  const { isChecked, setIsChecked } = useMyContext();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  console.log("toggle file", isChecked);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {/* Label for Off State (Inactive) with Light Blue Color */}
      <span
        style={{
          fontSize: "0.875rem",
          color: isChecked ? "#4b5563" : "#38bdf8",
        }}
      >
        {isChecked ? "Active" : "Inactive"}
      </span>

      {/* Switch Container */}
      <label
        htmlFor="toggle"
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          id="toggle"
          checked={isChecked}
          onChange={handleChange}
          style={{ display: "none" }}
        />

        {/* Switch Design with Gradient Backgrounds */}
        <div
          style={{
            width: "3rem",
            height: "1.75rem",
            background: isChecked
              ? "linear-gradient(to right, #38bdf8, #2563eb)"
              : "linear-gradient(to right, #e2e8f0, #edf2f7)",
            borderRadius: "9999px",
            position: "relative",
            transition: "background 0.3s ease",
          }}
        >
          {/* Active Circle (Knob) */}
          <div
            style={{
              content: "''",
              position: "absolute",
              top: "3px",
              left: isChecked ? "calc(100% - 1.25rem)" : "3px",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "1.25rem",
              height: "1.25rem",
              transition: "left 0.3s ease",
            }}
          ></div>
        </div>
      </label>

      {/* Label for On State (Active) */}
      {/* <span
        style={{
          fontSize: "0.875rem",
          color: isChecked ? "#4b5563" : "#38bdf8",
        }}
      >
        {isChecked ? "Active" : "Inactive"}
      </span> */}
    </div>
  );
};

export default ToggleSwitch;

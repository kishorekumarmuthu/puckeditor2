import { ComponentConfig } from "@/core";
import { MyProvider, useMyContext } from "./ToggleSwitch";

export const ToggleSwitchComponent: ComponentConfig = {
  fields: {
    showexport: {
      type: "custom",
      render: ({ onChange, value = "on" }) => {
        // const { true, settrue } = useMyContext();
        // const handleChange = () => {
        //   settrue(!true);
        // };
        // console.log("value is", value);
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Label for Off State (Inactive) with Light Blue Color */}
            <span
              style={{
                fontSize: "0.875rem",
                color: value == "on" ? "#4b5563" : "#38bdf8",
              }}
            >
              {value == "on" ? "Active" : "Inactive"}
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
                checked={true}
                defaultValue={value}
                onChange={(e) => {
                  //console.log("asdfds", e.currentTarget.value);
                  e.currentTarget.value == "off"
                    ? onChange("on")
                    : onChange("off");
                  //onChange("on");
                }}
                style={{ display: "none" }}
              />

              {/* Switch Design with Gradient Backgrounds */}
              <div
                style={{
                  width: "3rem",
                  height: "1.75rem",
                  background:
                    value == "on"
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
                    left: value == "on" ? "calc(100% - 1.25rem)" : "3px",
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
                color: true ? "#4b5563" : "#38bdf8",
              }}
            >
              {true ? "Active" : "Inactive"}
            </span> */}
          </div>
        );
      },
    },
  },
  render: ({ showexport }) => {
    return showexport == "on" ? (
      <div style={{ paddingBottom: "10px" }}>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M960 608a32 32 0 0 0-32 32v288h-288a32 32 0 0 0 0 64h320a32 32 0 0 0 32-32V640a32 32 0 0 0-32-32zM512 928h-128a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64zM278.72 937.28a32 32 0 0 0-34.88-6.72 29.76 29.76 0 0 0-10.56 6.72 32 32 0 0 0-6.72 10.56A32 32 0 0 0 224 960a32 32 0 0 0 54.72 22.72 37.12 37.12 0 0 0 6.72-10.56 30.08 30.08 0 0 0 0-24.32 29.76 29.76 0 0 0-6.72-10.56zM128 928H96v-288a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32h64a32 32 0 0 0 0-64zM64 96h416v570.56l-171.2-146.88a32 32 0 0 0-41.6 48.64l224 192a32 32 0 0 0 4.8 2.88l2.56 1.6a30.08 30.08 0 0 0 23.36 0l2.24-1.6a32 32 0 0 0 4.8-2.88l224-192a32 32 0 0 0-41.6-48.64L544 666.56V64a32 32 0 0 0-32-32H64a32 32 0 0 0 0 64z"
            fill="#231815"
          />
        </svg>{" "}
      </div>
    ) : (
      ""
    );
  },
};

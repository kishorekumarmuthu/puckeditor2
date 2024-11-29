import { ComponentConfig } from "@/core";
import { FieldLabel } from "@measured/puck";

export const Example: ComponentConfig = {
  fields: {
    title: {
      type: "custom",
      render: ({ name, onChange, value }) => (
        <input
          defaultValue={value}
          name={name}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      ),
    },
  },
  render: ({ title }) => {
    return <p>{title}</p>;
  },
};

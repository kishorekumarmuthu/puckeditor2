/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { ComponentConfig } from "@/core/types";
import styles from "./styles.module.css";
import { getClassNameFactory } from "@/core/lib";
import { Button } from "@/core/components/Button";
import { Section } from "../../components/Section";
import { quotes } from "./quotes";
import { AutoField, FieldLabel } from "@/core";
import { Link2 } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";
import { ExportIcon, CustomIconProps } from "../FormOptions/ExportIcon";
import { useMyContext } from "./ToggleSwitch";
import { api, GetAllDataForms, GetDataFormsUser } from "./Axios";
import { resolveAllData } from "@/core";
import { AllDataForms } from "./Axios";

const getClassName = getClassNameFactory("Hero", styles);

// let dataForms: any = {
//   "Form A": "Form A",
//   "Form B": "Form B",
//   "Form C": "Form C",
// };
// let modifiedDataFormsArr = [];
// let DataFormsOptionsArr: any = [];
// let data = GetAllDataForms().then(async (res) => {
//   //console.log("from df", res);
//   return res;
// });

// console.log("all dfs are", AllDataForms);

// for (let key in dataForms) {
//   modifiedDataFormsArr.push({ label: `${key}`, value: `${dataForms[key]}` });
// }

// type FieldOptions = {
//   type: string; // Can be more specific if necessary (e.g., "select", etc.)
//   options: {
//     label: string;
//     value: string;
//   }[]; // Array of options (modify as necessary to match your data)
// };

// type FormInputProps = {
//   label: string;
//   placeholder: string;
// };

// type FormInputs = {
//   FormA: { type: string; props: FormInputProps }[];
//   FormB: { type: string; props: FormInputProps }[];
//   FormC: { type: string; props: FormInputProps }[];
// };

// type DataForms = {
//   type: string;
//   fields: FieldOptions;
//   render: ({ DataForm }: { DataForm: keyof FormInputs }) => JSX.Element;
// };

export type ToggleSwitch = {
  type: string;
  render: () => JSX.Element;
};

export type ExportIconConfig = {
  type: string;
  render: () => JSX.Element;
};

export type HeroProps = {
  quote?: { index: number; label: string };
  title?: string;
  title2?: string;
  description?: string;
  align?: string;
  padding?: string;
  image?: {
    mode?: "inline" | "background";
    url?: string;
  };
  buttons?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    more?: { text: string }[];
  }[];
  DataForm?: string;
  ToggleSwitchComponent?: CustomIconProps;
  showexport?: string;
  AddNewButton?: string;
  // AddNewButton:
  // ExportIcon?: CustomIconProps;
};

// const DataForm: DataForms = {
//   fields: {
//     type: "select",
//     options: [
//       { label: "Form A", value: "FormA" },
//       { label: "Form B", value: "FormB" },
//       { label: "Form C", value: "FormC" },
//     ],
//   },
//   render: ({ DataForm }) => {
//     const formInputs: FormInputs = {
//       FormA: [
//         {
//           type: "Example1",
//           props: {
//             label: "Name",
//             placeholder: "Enter your name",
//           },
//         },
//       ],
//       FormB: [
//         {
//           type: "Example2",
//           props: {
//             label: "Email",
//             placeholder: "Enter your email",
//           },
//         },
//       ],
//       FormC: [
//         {
//           type: "Example3",
//           props: { label: "Age", placeholder: "Enter your age" },
//         },
//       ],
//     };

//     const selectedInputs = formInputs[DataForm] || [];
//     return (
//       <Section>
//         <div>
//           <h1>{DataForm}</h1>
//           {/* {selectedInputs.map(({ type, props }, index) => {
//             const Component = config.components[type];
//             return Component ? (
//               <div
//                 key={index}
//                 style={{ display: "flex", flexDirection: "row" }}
//               >
//                 {Component.render(props)}
//               </div>
//             ) : (
//               <p key={index}>Unknown input type: {type}</p>
//             );
//           })} */}
//         </div>
//       </Section>
//     );
//   },
// };

// const formInputs: any = {
//   FormA: [
//     {
//       type: "Example1",
//       props: {
//         label: "Name",
//         placeholder: "Enter your name",
//       },
//     },
//   ],
//   FormB: [
//     {
//       type: "Example2",
//       props: {
//         label: "Email",
//         placeholder: "Enter your email",
//       },
//     },
//   ],
//   FormC: [
//     {
//       type: "Example3",
//       props: { label: "Age", placeholder: "Enter your age" },
//     },
//   ],
// };

export const Hero: ComponentConfig<HeroProps> = {
  fields: {
    title2: { type: "text" },
    showexport: {
      type: "custom",
      render: ({ onChange, value = "off" }) => {
        // const { true, settrue } = useMyContext();
        // const handleChange = () => {
        //   settrue(!true);
        // };
        // console.log("value is", value);
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Label for Off State (Inactive) with Light Blue Color */}
            <p>Show Export</p>
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
          </div>
        );
      },
    },
    AddNewButton: {
      type: "custom",
      render: ({ onChange, value = "off" }) => {
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Label for Off State (Inactive) with Light Blue Color */}
            <p>Add New Button</p>
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
              htmlFor="AddNewButton"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                id="AddNewButton"
                checked={true}
                defaultValue={value}
                onChange={(e) => {
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
          </div>
        );
      },
    },
    // DataForm: {
    //   type: "select",
    //   options: [],
    //   selectedId: "",
    //   // resolveFields: async (data, { fields }) => {
    //   //   console.log("df fields are", fields);
    //   //   return fields;
    //   // },
    //   // render: ({ DataForm, onChange, value }) => {
    //   //   // const selectedInputs: any = formInputs[DataForm] || [];
    //   //   // console.log("selectedInputs", selectedInputs);
    //   //   return (
    //   //     <Section>
    //   //       <div>
    //   //         <h1>{DataForm}</h1>

    //   //         {/* {selectedInputs.map(({ type, props }, index) => {
    //   //           console.log("type is", type);
    //   //           //console.log(type);
    //   //           // const Component = Hero.fields[type];
    //   //           // console.log("comp is", Component);
    //   //           // return Component ? (
    //   //           //   <div
    //   //           //     style={{
    //   //           //       display: "flex",
    //   //           //       flexDirection: "row",
    //   //           //     }}
    //   //           //     key={index}
    //   //           //   >
    //   //           //     {Component.render(props)}
    //   //           //   </div>
    //   //           // ) : (
    //   //           //   <p key={index}>Unknown input type: {type}</p>
    //   //           // );
    //   //         })} */}
    //   //       </div>
    //   //     </Section>
    //   //   );
    //   // },
    // },
    DataForm: {
      type: "custom",
      //options: [],
      render: ({ onChange, value, field }) => {
        const [options, setOptions] = useState([]);

        // Fetch or update options dynamically
        useEffect(() => {
          const fetchOptions = async () => {
            const response = await api.get("dataform/get_dataforms");
            const formOptions = response.data.data.map((ele: any) => ({
              label: ele.formName,
              value: ele.formName,
              id: ele._id,
            }));
            console.log(formOptions);
            setOptions(formOptions);
          };
          fetchOptions();
        }, []);

        return (
          <div>
            <select
              value={value}
              onChange={(e) => {
                const newValue = e.target.value;
                onChange(newValue); // Update the parent component
                console.log(`Selected Form: ${newValue}`); // Log the change
              }}
            >
              <option value="" disabled>
                Select a Data Form
              </option>
              {options.length > 0 &&
                options.map((opt: any) => (
                  <option key={opt.value} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
            </select>
          </div>
        );
      },
    },

    // quote: {
    //   type: "external",
    //   placeholder: "Select a quote",
    //   showSearch: false,
    //   renderFooter: ({ items }) => {
    //     return (
    //       <div>
    //         {items.length} result{items.length === 1 ? "" : "s"}
    //       </div>
    //     );
    //   },
    //   filterFields: {
    //     author: {
    //       type: "select",
    //       options: [
    //         { value: "", label: "Select an author" },
    //         { value: "Mark Twain", label: "Mark Twain" },
    //         { value: "Henry Ford", label: "Henry Ford" },
    //         { value: "Kurt Vonnegut", label: "Kurt Vonnegut" },
    //         { value: "Andrew Carnegie", label: "Andrew Carnegie" },
    //         { value: "C. S. Lewis", label: "C. S. Lewis" },
    //         { value: "Confucius", label: "Confucius" },
    //         { value: "Eleanor Roosevelt", label: "Eleanor Roosevelt" },
    //         { value: "Samuel Ullman", label: "Samuel Ullman" },
    //       ],
    //     },
    //   },
    //   fetchList: async ({ query, filters }) => {
    //     console.log("query", query, filters);
    //     await new Promise((res) => setTimeout(res, 500));

    //     return quotes
    //       .map((quote, idx) => ({
    //         index: idx,
    //         title: quote.author,
    //         description: quote.content,
    //       }))
    //       .filter((item) => {
    //         if (filters?.author && item.title !== filters?.author) {
    //           return false;
    //         }

    //         if (!query) return true;

    //         const queryLowercase = query.toLowerCase();

    //         if (item.title.toLowerCase().indexOf(queryLowercase) > -1) {
    //           return true;
    //         }

    //         if (item.description.toLowerCase().indexOf(queryLowercase) > -1) {
    //           return true;
    //         }
    //       });
    //   },
    //   mapRow: (item) => ({
    //     title: item.title,
    //     description: <span>{item.description}</span>,
    //   }),
    //   mapProp: (result) => {
    //     return { index: result.index, label: result.description };
    //   },
    //   getItemSummary: (item) => item.label,
    // },
    title: { type: "text" },
    description: { type: "textarea" },
    buttons: {
      type: "array",
      min: 1,
      max: 4,
      getItemSummary: (item) => item.label || "Button",
      arrayFields: {
        label: { type: "text" },
        href: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "primary", value: "primary" },
            { label: "secondary", value: "secondary" },
          ],
        },
      },
      defaultItemProps: {
        label: "Button",
        href: "#",
      },
    },
    align: {
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
      ],
    },
    image: {
      type: "object",
      objectFields: {
        url: {
          type: "custom",
          render: ({ value, field, name, onChange, readOnly }) => (
            <FieldLabel
              label={field.label || name}
              readOnly={readOnly}
              icon={<Link2 size="16" />}
            >
              <AutoField
                field={{ type: "text" }}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
              />
            </FieldLabel>
          ),
        },
        mode: {
          type: "radio",
          options: [
            { label: "inline", value: "inline" },
            { label: "background", value: "background" },
          ],
        },
      },
    },
    padding: { type: "text" },
  },
  defaultProps: {
    title2: "Sample title",
    title: "Hero",
    align: "left",
    description: "Description",
    buttons: [{ label: "Learn more", href: "#" }],
    padding: "64px",
    DataForm: "Select a Data Form",
  },
  /**
   * The resolveData method allows us to modify component data after being
   * set by the user.
   *
   * It is called after the page data is changed, but before a component
   * is rendered. This allows us to make dynamic changes to the props
   * without storing the data in Puck.
   *
   * For example, requesting a third-party API for the latest content.
   */
  resolveData: async ({ props }, { changed }) => {
    //console.log("changed DF", changed);

    // if (!props.quote)
    //   return { props, readOnly: { title: false, description: false } };
    // if (!changed.quote) {
    //   return { props };
    // }
    // console.log(changed.DataForm);
    // let DataResponse: any = "";
    // if (changed.DataForm) {
    //   let DataResponse = await api
    //     .get("dataform/get_dataforms")
    //     .then((res) => {
    //       console.log("res", res.data.data);
    //       let formName = res.data.data.map((ele: any) => {
    //         return {
    //           label: ele.formName,
    //           value: ele.formName,
    //         };
    //       });
    //       return formName;
    //     })
    //     .catch((error) => {
    //       console.log("error ", error);
    //     });
    //   //console.log("Data Res", DataResponse);
    // }

    await new Promise(async (resolve) => {
      setTimeout(resolve, 1000);
    });

    // Simulate a delay
    //console.log("rd props are", props);
    return {
      // props: {
      //   DataForm: DataResponse,
      // },
    };
    // return {
    //   props: {
    //     title: quotes[props.quote.index].author,
    //     description: quotes[props.quote.index].content,
    //   },
    //   readOnly: { title: true, description: true },
    // };
  },
  resolveFields: async (data, { fields }) => {
    // console.log("rf data", data);
    // console.log("rf fields", fields);

    if (data.props.align === "center") {
      return {
        ...fields,
        image: undefined,
      };
    }
    // let DataFormsOptionsArr: any = [];
    // await api
    //   .get("dataform/get_dataforms")
    //   .then((res) => {
    //     console.log("res", res.data.data);
    //     res.data.data.map((ele: any) => {
    //       DataFormsOptionsArr.push({
    //         formId: ele._id.toString(),
    //         label: ele.formName.toString(),
    //         value: ele.formName.toString(),
    //       });
    //     });
    //     console.log("dfop", DataFormsOptionsArr);
    //   })
    //   .catch((error) => {
    //     console.log("error ", error);
    //   });

    // if (DataFormsOptionsArr.length > 0) {
    //   return {
    //     ...fields,
    //     DataForm: {
    //       type: "select",
    //       options: DataFormsOptionsArr,
    //     },
    //   };
    // }

    return fields;
  },
  resolvePermissions: async (data, params) => {
    if (!params.changed.quote) return params.lastPermissions;

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      ...params.permissions,
      // Disable delete if quote 7 is selected
      delete: data.props.quote?.index !== 7,
    };
  },
  render: ({
    align,
    title,
    showexport,
    description,
    buttons,
    padding,
    image,
    puck,
    DataForm,
    AddNewButton,
  }) => {
    // Empty state allows us to test that components support hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [isChecked] = useState(0);

    const [formData, setFormData]: any = useState();
    const [formName, setFormName]: any = useState();

    useEffect(() => {
      if (DataForm != "") {
        const fetchData = async () => {
          const response = await api.post("dataform/get_dataforms_user", {
            adv_filter_query: "",
            form_id: `${DataForm}`,
            is_adv_filter: "",
            page: "",
            perpage: "",
            search: "",
            sort_by: "",
            sort_type: "",
          });
          if (response) {
            let dataArray = response?.data?.result?.fields?.map((ele: any) => {
              return ele.user_data;
            });
            setFormName(response?.data?.result?.data);
            setFormData(dataArray);
            // let fields = response?.data?.result?.fields[0]?.user_data?.map(
            //   (ele) => {
            //     return ele;
            //   }
            // );
          }
          //console.log(response);
          // setFormData(response.data.result);
          //setOptions(formOptions);
        };
        fetchData();
      }
    }, [DataForm]);

    const tableStyle: any = {
      width: "100%",
      borderCollapse: "collapse",
    };

    const headerStyle: any = {
      backgroundColor: "#f4f4f4",
      fontWeight: "bold",
      border: "1px solid #ddd",
      padding: "8px",
    };

    const cellStyle: any = {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "center",
    };

    const rowEvenStyle: any = {
      backgroundColor: "#f9f9f9",
    };

    const rowHoverStyle: any = {
      backgroundColor: "#e0e0e0",
    };

    const buttonStyle: any = {
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "20px", // Rounded corners
      cursor: "pointer",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
    };

    const hoverStyle: any = {
      backgroundColor: "#0056b3", // Darker shade for hover effect
    };

    return (
      //this will render on the body
      <Section
        padding={padding}
        className={getClassName({
          left: align === "left",
          center: align === "center",
          hasImageBackground: image?.mode === "background",
        })}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "10px",
            padding: "10px",
          }}
        >
          {showexport == "on" ? (
            <>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M960 608a32 32 0 0 0-32 32v288h-288a32 32 0 0 0 0 64h320a32 32 0 0 0 32-32V640a32 32 0 0 0-32-32zM512 928h-128a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64zM278.72 937.28a32 32 0 0 0-34.88-6.72 29.76 29.76 0 0 0-10.56 6.72 32 32 0 0 0-6.72 10.56A32 32 0 0 0 224 960a32 32 0 0 0 54.72 22.72 37.12 37.12 0 0 0 6.72-10.56 30.08 30.08 0 0 0 0-24.32 29.76 29.76 0 0 0-6.72-10.56zM128 928H96v-288a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32h64a32 32 0 0 0 0-64zM64 96h416v570.56l-171.2-146.88a32 32 0 0 0-41.6 48.64l224 192a32 32 0 0 0 4.8 2.88l2.56 1.6a30.08 30.08 0 0 0 23.36 0l2.24-1.6a32 32 0 0 0 4.8-2.88l224-192a32 32 0 0 0-41.6-48.64L544 666.56V64a32 32 0 0 0-32-32H64a32 32 0 0 0 0 64z"
                  fill="#231815"
                />
              </svg>
            </>
          ) : (
            ""
          )}
          {AddNewButton == "on" ? (
            <>
              <button
                style={buttonStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    hoverStyle.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    buttonStyle.backgroundColor)
                }
              >
                Add New
              </button>
            </>
          ) : (
            ""
          )}
        </div>
        {image?.mode === "background" && (
          <>
            <div
              className={getClassName("image")}
              style={{
                backgroundImage: `url("${image?.url}")`,
              }}
            ></div>

            <div className={getClassName("imageOverlay")}></div>
          </>
        )}
        <div>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={headerStyle}>{JSON.stringify(formData)}</th>
                <th style={headerStyle}>{JSON.stringify(formData)}</th>
              </tr>
            </thead>
            <tbody>
              {formData?.map((ele: any, index: any) => {
                return (
                  <>
                    <tr
                      key={index}
                      style={index % 2 === 0 ? rowEvenStyle : null}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          rowHoverStyle.backgroundColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          index % 2 === 0
                            ? rowEvenStyle.backgroundColor
                            : "transparent")
                      }
                    >
                      <td style={cellStyle}>Row {JSON.stringify(ele)} Col 1</td>
                      <td style={cellStyle}>Row {JSON.stringify(ele)} Col 2</td>
                      <td style={cellStyle}>Row {JSON.stringify(ele)} Col 3</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={getClassName("inner")}>
          <div className={getClassName("content")}>
            <h1>{title}</h1>
            <p className={getClassName("subtitle")}>{description}</p>
            <div className={getClassName("actions")}>
              {buttons?.map((button, i) => (
                <Button
                  key={i}
                  href={button.href}
                  variant={button.variant}
                  size="large"
                  tabIndex={puck.isEditing ? -1 : undefined}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>

          {align !== "center" && image?.mode !== "background" && image?.url && (
            <div
              style={{
                backgroundImage: `url('${image?.url}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: 24,
                height: 356,
                marginLeft: "auto",
                width: "100%",
              }}
            />
          )}
        </div>
      </Section>
    );
  },
};

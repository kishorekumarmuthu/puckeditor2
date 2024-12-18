"use client";

import { Button, Puck, Render } from "@/core";
import headingAnalyzer from "@/plugin-heading-analyzer/src/HeadingAnalyzer";
import config from "../../config";
import { useDemoData } from "../../lib/use-demo-data";
import { MyProvider } from "../../config/blocks/Hero/ToggleSwitch";
import { useMyContext } from "../../config/blocks/Hero/ToggleSwitch";

export function Client({
  path,
  isEdit,
}: {
  path: string;
  isEdit: boolean;
}): any {
  const { data, resolvedData, key } = useDemoData({
    path,
    isEdit,
  });

  // const { isChecked } = useMyContext();
  // console.log("demoData", isChecked);

  if (isEdit) {
    return (
      <MyProvider>
        <div>
          <Puck
            config={config}
            data={data}
            onPublish={async (data) => {
              localStorage.setItem(key, JSON.stringify(data));
            }}
            plugins={[headingAnalyzer]}
            headerPath={path}
            overrides={{
              headerActions: ({ children }) => (
                <>
                  <div>
                    <Button href={path} newTab variant="secondary">
                      View page
                    </Button>
                  </div>

                  {children}
                </>
              ),
            }}
          />
        </div>
      </MyProvider>
    );
  }

  if (data.content) {
    return <Render config={config} data={resolvedData} />;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>404</h1>
        <p>Page does not exist in session storage</p>
      </div>
    </div>
  );
}

export default Client;

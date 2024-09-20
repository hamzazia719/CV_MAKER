import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import MyForm from "../form_all_data/Personal";
import Experence from "../form_all_data/Experence/Experence";
import UsersList from "./Templete/Templete1";
const steps = [
  {
    title: "Personal Details",
    content: <MyForm />,
  },
  {
    title: "Experence",
    content: <Experence />,
  },
  {
    title: "Last",
    content: <UsersList/>,
  },
];

const Template: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <div className=" w-[80%] m-auto my-4">
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button
              style={{ backgroundColor: "#0891b2", color: "white" }}
              onClick={() => next()}
            >
              Next Step
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Template;

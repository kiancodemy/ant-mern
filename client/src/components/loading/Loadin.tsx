import React from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-white/30">
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: "48px" }} spin />}
        spinning
        percent="auto"
      />
    </div>
  );
};

export default Loading;

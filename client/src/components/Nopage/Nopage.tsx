import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const Nopage: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="The Page Was Not Found!!!"
    extra={
      <Button type="primary">
        <Link to="/">Back To Home</Link>
      </Button>
    }
  />
);

export default Nopage;

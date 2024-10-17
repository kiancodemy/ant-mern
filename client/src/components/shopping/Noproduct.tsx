import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Noproduct: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={() => navigate("/shop/listing")} type="primary">
          Select Product
        </Button>
      }
    />
  );
};

export default Noproduct;

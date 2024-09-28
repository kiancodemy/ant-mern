import { Button, Flex, Drawer, Slider } from "antd";
import { useState } from "react";
import { LoginOutlined, AlignLeftOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar";
export default function Header() {
  //function for logout
  const Logout = () => {};
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Flex className="bg-black p-4" justify="space-between">
      <Drawer
        placement="left"
        title="Close Drawer"
        onClose={onClose}
        open={open}
      >
        <Sidebar onClos={onClose}></Sidebar>
      </Drawer>
      <Button
        className="md:invisible"
        iconPosition="start"
        icon={<AlignLeftOutlined />}
        onClick={showDrawer}
        type="primary"
        size="large"
      ></Button>
      <Button
        iconPosition="start"
        icon={<LoginOutlined />}
        onClick={Logout}
        type="primary"
        size="large"
      >
        Logout
      </Button>
    </Flex>
  );
}

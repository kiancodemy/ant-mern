import { Row, Col, Flex, Button, Dropdown, Space, Drawer, Badge } from "antd";
import { RootState } from "../../store/store";
import type { MenuProps } from "antd";
import { useAppSelector } from "../../hooks/reduxHook";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import {
  ShoppingCartOutlined,
  DownOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { MenuOutlined } from "@ant-design/icons";

export default function Header() {
  const count = useAppSelector(
    (state: RootState) => state.persistedReducer.order.order.totalQuantity
  );
  console.log(count);
  const [openMenue, setopenMenue] = useState(false);
  const onClose = () => {
    setopenMenue(false);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <span>
          <LogoutOutlined />
          <span>LogOut</span>
        </span>
      ),
      key: "0",
    },

    {
      type: "divider",
    },
    {
      label: <span>LogOut</span>,
      key: "1",
    },
  ];
  return (
    <div>
      <Row className="bg-gray-100 py-4" justify="center">
        <Col span={22}>
          <Flex align="center" className="md:justify-between justify-end">
            <span className="md:block hidden font-semibold text-lg">
              Ecommerce
            </span>
            <div className="hidden md:block">
              <Navigation></Navigation>
            </div>

            <Flex justify="center" align="center" gap={15}>
              <Link to="/shop/checkout">
                <Badge status="error" size="default" count={count}>
                  <ShoppingCartOutlined className="text-xl" />
                </Badge>
              </Link>

              <Dropdown menu={{ items }} trigger={["click"]}>
                <Space>
                  <Button>
                    User
                    <DownOutlined />
                  </Button>
                </Space>
              </Dropdown>

              <Button className="md:hidden" onClick={() => setopenMenue(true)}>
                <MenuOutlined />
              </Button>
            </Flex>
          </Flex>
        </Col>
      </Row>
      <Drawer title="Basic Drawer" onClose={onClose} open={openMenue}>
        <Navigation></Navigation>
      </Drawer>
    </div>
  );
}

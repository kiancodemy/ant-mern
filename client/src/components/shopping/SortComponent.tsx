import { Dropdown, Button, Space, Divider } from "antd";
import {
  DisconnectOutlined,
  RetweetOutlined,
  ColumnHeightOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import { useAppDispatch } from "../../hooks/reduxHook";
import {
  setsort,
  setbrandd,
  setcategory,
} from "../../store/slices/productSlice";

import { brand, categories } from "../../assets/admin/adminDashboard";
export default function SortComponent() {
  const dispatch = useAppDispatch();
  const categoryitem: MenuProps["items"] = categories.map((item) => ({
    label: (
      <span
        onClick={() => dispatch(setcategory(item.value))}
        className="capitalize"
      >
        {item.label}
      </span>
    ),
    key: item.key.toString(),
  }));
  const branditem: MenuProps["items"] = brand.map((item) => ({
    label: (
      <span
        onClick={() => dispatch(setbrandd(item.value))}
        className="capitalize"
      >
        {item.label}
      </span>
    ),
    key: item.key.toString(),
  }));

  const items: MenuProps["items"] = [
    {
      label: (
        <span onClick={() => dispatch(setsort("1"))} className="capitalize">
          Price: low to hight
        </span>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <span onClick={() => dispatch(setsort("-1"))} className="capitalize">
          Price: hight to low
        </span>
      ),
      key: "1",
    },
    {
      label: (
        <span onClick={() => dispatch(setsort("-2"))} className="capitalize">
          Title:z-a
        </span>
      ),
      key: "2",
    },
    {
      label: (
        <span onClick={() => dispatch(setsort("2"))} className="capitalize">
          Title:a-z
        </span>
      ),
      key: "3",
    },
  ];

  return (
    <Space
      className="mt-4 max-w-[320px]"
      split={<Divider className="md:hidden " type="vertical" />}
    >
      <Dropdown
        className="md:hidden"
        menu={{ items: branditem }}
        trigger={["click"]}
      >
        <Button type="primary">
          <DisconnectOutlined />
          brand
        </Button>
      </Dropdown>
      <Dropdown
        className="md:hidden"
        menu={{ items: categoryitem }}
        trigger={["click"]}
      >
        <Button type="primary">
          <RetweetOutlined />
          Category
        </Button>
      </Dropdown>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button type="primary">
          <ColumnHeightOutlined />
          Sort
        </Button>
      </Dropdown>
    </Space>
  );
}

import React from "react";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { useAppDispatch } from "../../hooks/reduxHook";
import { setsort } from "../../store/slices/productSlice";
export default function SortComponent() {
  const dispatch = useAppDispatch();
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
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Button>Sort</Button>
    </Dropdown>
  );
}

import React from "react";
import { Divider, Radio, Flex, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { categories } from "../../assets/admin/adminDashboard";
import { CategoriesType } from "../../types/user";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHook";
import { setbrandd, setcategory } from "../../store/slices/productSlice";

import { brand } from "../../assets/admin/adminDashboard";
export default function Filter() {
  const dispatch = useAppDispatch();
  const [categoryvalue, setcategoryValue] = useState(1);
  const [brands, setbrand] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    /*console.log("radio checked", e.target.value);*/
    dispatch(setcategory(e.target.value));
    setcategoryValue(e.target.value);
  };
  const onChangebrand = (e: RadioChangeEvent) => {
    /*console.log("radio checked", e.target.value);*/
    dispatch(setbrandd(e.target.value));
    setbrand(e.target.value);
  };
  return (
    <Flex vertical gap={4}>
      <Flex vertical>
        <h1 className="font-bold capitalize text-lg">category</h1>
        <Divider></Divider>
        <Radio.Group onChange={onChange} value={categoryvalue}>
          <Space direction="vertical">
            {categories.map((item: CategoriesType) => {
              return (
                <Radio key={item.key} value={item.value}>
                  {item.label}
                </Radio>
              );
            })}
          </Space>
        </Radio.Group>
      </Flex>
      <Divider></Divider>

      <h1 className="font-bold capitalize text-lg">brand</h1>
      <Divider></Divider>

      <Radio.Group onChange={onChangebrand} value={brands}>
        <Space direction="vertical">
          {brand.map((item: CategoriesType) => {
            return (
              <Radio key={item.key} value={item.value}>
                {item.label}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </Flex>
  );
}

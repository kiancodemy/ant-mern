import { Button, Input, Flex, Form } from "antd";
import { Link } from "react-router-dom";
import type { FormProps } from "antd";
import { useState } from "react";
type FieldType = {
  password?: string;
  email?: string;
};

export default function LoginForm() {
  const [loading, setloading] = useState<boolean>(false);
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className=" max-w-[500px] py-[10px] px-[20px]">
      <Flex gap={20} vertical>
        <h1 className="font-bold capitalize text-[30px] text-center">login </h1>
        <Flex
          gap={10}
          className="lg:text-[20px] font-semibold capitalize"
          justify="center"
        >
          <h1>dont you have acount?</h1>
          <Link to="/auth/signup">signup</Link>
        </Flex>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 500 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password maxLength={10} showCount />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              xs: { offset: 0, span: 24 },
              sm: { offset: 8, span: 16 },
            }}
          >
            <Button block loading={loading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
}

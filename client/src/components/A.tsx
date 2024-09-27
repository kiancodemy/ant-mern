import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => (
  <Form
    layout="vertical"
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 20 }}
    style={{ maxWidth: 400 }}
    initialValues={{ remember: true, layout: "horizontal" }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: <span>"Please input your username!"</span>,
        },
      ]}
    >
      <Input showCount maxLength={20} />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password showCount maxLength={20} minLength={5} />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;

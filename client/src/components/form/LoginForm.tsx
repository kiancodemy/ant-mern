import { Button, Input, Flex, Form, message } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHook";
import { loginUser } from "../../store/slices/authslice";
import { useLoginMutation } from "../../store/api/userapi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import type { FormProps } from "antd";

type FieldType = {
  password?: string;
  email?: string;
};

export default function LoginForm() {
  const navigate = useNavigate();

  ///rtk query config//
  const [get, { isLoading, data, isSuccess, isError, error }] =
    useLoginMutation();

  // redux toolit//
  const dispatch = useAppDispatch();

  ///ant design alert message
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    if (isError) {
      messageApi.open({
        type: "error",
        content: error?.data?.message,
        duration: 3,
      });
    } else if (isSuccess) {
      messageApi.open({
        type: "success",
        content: data.message,
        duration: 2,
      });
      dispatch(loginUser(data.userInfo));
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [isError, error, isSuccess, data, error, navigate, dispatch]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    await get(values);
  };

  return (
    <div className=" max-w-[500px] py-[10px] px-[20px]">
      {contextHolder}
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
            <Button block loading={isLoading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
}

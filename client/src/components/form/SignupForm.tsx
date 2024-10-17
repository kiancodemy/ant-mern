import { Button, Input, Flex, Form, message } from "antd";
import { useRegisterMutation } from "../../store/api/userapi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { FormProps } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
type FieldType = {
  username?: string;
  password?: string;
  email?: string;
};
export default function SignupForm() {
  const navigate = useNavigate();
  const [get, { isLoading, data, isSuccess, isError, error }] =
    useRegisterMutation();

  ///ant design alert message
  const [messageApi, contextHolder] = message.useMessage();

  ////rtk mutation for creating post
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    await get(values);
  };
  ///query check//
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get("redirect");
  useEffect(() => {
    if (isError) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: error?.data?.message,
        duration: 2,
      });
    } else if (isSuccess) {
      console.log(data);
      messageApi
        .open({
          type: "success",
          content: data.message,
          duration: 2,
        })
        .then(() => {
          if (redirect) {
            navigate(`/auth/login?redirect=${redirect}`);
          } else {
            navigate("/auth/login");
          }
        });
    }
  }, [isError, error, isSuccess, data, error, navigate]);

  return (
    <div className="max-w-[500px] py-[10px] px-[20px]">
      {contextHolder}
      <Flex gap={20} vertical>
        <h1 className="font-bold capitalize text-[30px] text-center">
          sign up
        </h1>
        <Flex
          gap={10}
          className="lg:text-[20px] font-semibold capitalize"
          justify="center"
        >
          <h1>already have acount?</h1>
          <Link
            to={redirect ? `/auth/login?redirect=${redirect}` : "/auth/login"}
          >
            login
          </Link>
        </Flex>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
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
            <Button loading={isLoading} block type="primary" htmlType="submit">
              Signup
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
}

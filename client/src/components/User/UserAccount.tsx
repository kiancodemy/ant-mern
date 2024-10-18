import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { RootState } from "../../store/store";
import type { FormProps } from "antd";
import { userupdate } from "../../store/slices/authslice";
import { Button, Input, Flex, Form, message } from "antd";
export default function UserAccount() {
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const { id, username, email } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await dispatch(userupdate({ body: values, id: id })).unwrap();

      messageApi.open({
        type: "info",
        content: "Updated Successfully",
        duration: 2,
      });
    } catch (err: any) {
      messageApi.open({
        type: "error",
        content: err.message,
        duration: 2,
      });
    }
    //await get(values);
  };

  type FieldType = {
    username?: string;
    email?: string;
    password?: string;
  };
  return (
    <div className="flex justify-center px-4 max-w-[95%] mx-auto container md:py-20 py-10">
      {contextHolder}
      <div className="flex max-w-full container md:max-w-[400px] flex-col gap-y-8">
        <h1 className="font-bold text-lg md:text-2xl capitalize text-center ">
          updated profile
        </h1>
        <Form
          className="border px-4 py-8 rounded-md"
          initialValues={{ email, username }}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 500 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType> label="Email" name="email">
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item<FieldType> label="Password" name="password">
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              xs: { offset: 0, span: 24 },
              sm: { offset: 8, span: 16 },
            }}
          >
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

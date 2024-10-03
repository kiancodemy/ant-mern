import { Flex, Button, Form, Input } from "antd";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import type { FormProps } from "antd";
import { setAddress } from "../../store/slices/OrderSlice";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
export default function Checkout() {
  //redux toolkit config//
  const dispatch = useAppDispatch();
  const { City, Street, Adress, Postalcode } = useAppSelector(
    (state: RootState) => state.persistedReducer.order.address
  );

  //form type//
  type FieldType = {
    City: string;
    Street: string;
    Adress: string;
    Postalcode: string;
  };

  //submit funnction//

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(setAddress(values));
  };
  return (
    <div className="flex min-h-[80vh] items-start py-16 justify-center mt-6 md:mt-10 bg-[#f7f8f9] ">
      <Flex
        className="border bg-white py-8 md:py-12 px-6 rounded-md container md:max-w-[500px] max-w-[320px]"
        vertical
      >
        <Form
          name="basic"
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
          initialValues={{
            City: City,
            Street: Street,
            Adress: Adress,
            Postalcode: Postalcode,
          }}
        >
          <Flex className="flex flex-col gap-y-2 md:gap-y-4">
            <Form.Item<FieldType>
              label="City"
              name="City"
              rules={[{ required: true, message: "Please input your City!" }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Street"
              name="Street"
              rules={[{ required: true, message: "Please input your Street!" }]}
            >
              <Input size="large" type="text" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Adress"
              name="Adress"
              rules={[{ required: true, message: "Please input your Adress!" }]}
            >
              <Input size="large" type="text" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Postal code"
              name="Postalcode"
              rules={[
                { required: true, message: "Please input your Postal code!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button block type="primary" htmlType="submit">
                Continue
              </Button>
              <Link to="/shop/listing">
                <Button className="mt-4" block type="primary" htmlType="submit">
                  back
                </Button>
              </Link>
            </Form.Item>
          </Flex>
        </Form>
      </Flex>
    </div>
  );
}

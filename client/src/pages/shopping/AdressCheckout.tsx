import { Flex, Button, Form, Input, message, Steps } from "antd";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import type { FormProps } from "antd";
import { useEffect } from "react";
import { setAddress } from "../../store/slices/OrderSlice";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function AdressCheckout() {
  //error meesage config//
  const [messageApi, contextHolder] = message.useMessage();

  const failed = () => {
    messageApi.open({
      type: "error",
      content: "please fill all the inputs!",
      duration: 3,
    });
  };

  /// navigation rout//
  const navigate = useNavigate();
  //redux toolkit config//
  const dispatch = useAppDispatch();
  const { City, Street, Adress, Postalcode } = useAppSelector(
    (state: RootState) => state.persistedReducer.order.address
  );

  //use effect//
  useEffect(() => {
    if (!City || !Street || !Adress || !Postalcode) {
      navigate("/shop/address");
    }
  }, [City, Street, Adress, Postalcode]);

  //form type//
  type FieldType = {
    City: string;
    Street: string;
    Adress: string;
    Postalcode: string;
  };

  //submit funnction//

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    messageApi
      .open({
        type: "success",
        content: "submited sucessfully",
        duration: 1,
      })
      .then(() => {
        dispatch(setAddress(values));
        navigate("/shop/pay");
      });

    dispatchEvent;
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
    failed();
  };
  return (
    <div className="bg-[#f7f8f9]">
      <Flex justify="center">
        <Steps
          className="mt-6 md:max-w-[500px] max-w-[300px]"
          size="small"
          current={1}
          items={[
            {
              title: "SelectProducts",
            },
            {
              title: "Adress",
            },
            {
              title: "Checkout",
            },
          ]}
        />
      </Flex>
      <div className="flex min-h-[80vh] items-start py-16 justify-center mt-6 md:mt-10  ">
        {contextHolder}

        <Flex
          className="border bg-white py-8 md:py-12 px-6 rounded-md container md:max-w-[500px] max-w-[320px]"
          vertical
        >
          <Form
            onFinishFailed={onFinishFailed}
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
                data-test="city"
                label="City"
                name="City"
                rules={[{ required: true, message: "Please input your City!" }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item<FieldType>
                data-test="street"
                label="Street"
                name="Street"
                rules={[
                  { required: true, message: "Please input your Street!" },
                ]}
              >
                <Input size="large" type="text" />
              </Form.Item>
              <Form.Item<FieldType>
                data-test="adress"
                label="Adress"
                name="Adress"
                rules={[
                  { required: true, message: "Please input your Adress!" },
                ]}
              >
                <Input size="large" type="text" />
              </Form.Item>

              <Form.Item<FieldType>
                data-test="postal"
                label="Postal code"
                name="Postalcode"
                rules={[
                  { required: true, message: "Please input your Postal code!" },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button
                  data-test="continue"
                  block
                  type="primary"
                  htmlType="submit"
                >
                  Continue
                </Button>
                <Link to="/shop/listing">
                  <Button
                    data-test="backer"
                    className="mt-4"
                    block
                    type="primary"
                    htmlType="submit"
                  >
                    back
                  </Button>
                </Link>
              </Form.Item>
            </Flex>
          </Form>
        </Flex>
      </div>
    </div>
  );
}

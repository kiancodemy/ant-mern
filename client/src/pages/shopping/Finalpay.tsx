import { RootState } from "../../store/store";
import {
  Col,
  Flex,
  Row,
  Divider,
  Button,
  Steps,
  message,
  Skeleton,
} from "antd";

import { productsType } from "../../types/user";
import Noproduct from "../../components/shopping/Noproduct";
import EditProduct from "../../components/shopping/EditProduct";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../../store/api/OrderApi";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { useEffect } from "react";
import { clearOrder } from "../../store/slices/OrderSlice";
export default function Finalpay() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const { City, Street, Adress, Postalcode } = useAppSelector(
    (state: RootState) => state.persistedReducer.order.address
  );
  const { id } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );

  const { totalQuantity, totalTax, totalprice, AllOrders } = useAppSelector(
    (state: RootState) => state.persistedReducer.order.order
  );

  //use eefect//

  //use effect//

  useEffect(() => {
    if (!City || !Street || !Adress || !Postalcode) {
      navigate("/shop/address");
    }
  }, [City, Street, Adress, Postalcode]);
  ///useeffect//
  useEffect(() => {
    if (AllOrders.length === 0) {
      messageApi
        .open({
          type: "error",
          content: "you have not chosen any product!",
          duration: 2,
        })
        .then(() => {
          navigate("/shop/listing");
        });

      //navigate("/shop/listing");
    }
  }, [navigate]);
  ///submit function///

  //const order = useAppSelector((state) => state.persistedReducer.order);

  const [create] = useCreateOrderMutation();

  const handleSubmit = async () => {
    try {
      await create({
        userID: id,
        totalQuantity,
        totalTax,
        totalprice,
        orders: AllOrders,
      });

      messageApi
        .open({
          type: "success",
          content: "order created successfully",
          duration: 2,
        })
        .then(() => {
          dispatch(clearOrder());
        })
        .then(() => navigate("/shop/listing"));
    } catch (err) {
      messageApi.open({
        type: "error",
        content: `${err}`,
        duration: 2,
      });
    }
  };

  return (
    <Skeleton loading={false}>
      <div>
        {contextHolder}
        <Flex justify="center">
          <Steps
            current={2}
            className="mt-6 md:max-w-[500px] container px-4 max-w-300px]"
            size="small"
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
        <Row
          align="top"
          className="md:mt-12 mt-3 py-4 md:py-10 gap-y-4"
          justify={"space-evenly"}
        >
          <Col
            xs={{ span: 24 }}
            md={{ span: 17 }}
            className=" rounded-md p-4 grid gap-y-4 bg-white border"
          >
            {AllOrders.length > 0 ? (
              AllOrders.map((item: productsType) => {
                return (
                  <EditProduct
                    final={true}
                    key={item._id}
                    item={item}
                  ></EditProduct>
                );
              })
            ) : (
              <Noproduct></Noproduct>
            )}
          </Col>

          <Col
            xs={{ span: 20 }}
            md={{ span: 5 }}
            className="border px-4 py-10  rounded-md "
          >
            <Flex vertical>
              <div>
                <Flex className="text-lg" justify="space-between">
                  <span className="capitalize font-semibold">
                    total Quantity:
                  </span>
                  <span>{totalQuantity || 0}</span>
                </Flex>
                <Divider></Divider>
                <Flex className="text-lg" justify="space-between">
                  <span className="capitalize font-semibold">total Tax:</span>
                  <span>{totalTax || 0} $</span>
                </Flex>
                <Divider></Divider>

                <Flex className="text-lg" justify="space-between">
                  <span className="capitalize font-semibold">total price:</span>
                  <span>{totalprice || 0} $</span>
                </Flex>
              </div>
              <Button
                disabled={AllOrders.length === 0}
                block
                type="primary"
                onClick={handleSubmit}
                className="capitalize mt-7"
              >
                pay
              </Button>
              <Link to="/shop/address">
                <Button className="mt-4" block type="primary" htmlType="submit">
                  back
                </Button>
              </Link>
            </Flex>
          </Col>
        </Row>
      </div>
    </Skeleton>
  );
}

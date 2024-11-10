import { RootState } from "../../store/store";
import { Col, Flex, Row, Divider, Button, Steps } from "antd";
import { useAppSelector } from "../../hooks/reduxHook";
import { productsType } from "../../types/user";
import Noproduct from "../../components/shopping/Noproduct";
import EditProduct from "../../components/shopping/EditProduct";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
export default function Procheck() {
  const navigate = useNavigate();
  const { totalQuantity, totalTax, totalprice, AllOrders } = useAppSelector(
    (state: RootState) => state.persistedReducer.order.order
  );

  

  const handleSubmit = () => {
    navigate("/shop/address");
  };

  return (
    <div>
      <Flex justify="center">
        <Steps
          className="mt-6 md:max-w-[500px] max-w-[300px]"
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
      <Row align="top" className="mt-16 py-10 md:py-2" justify={"space-evenly"}>
        <Col
          xs={{ span: 24 }}
          md={{ span: 17 }}
          className=" rounded-md p-4 grid gap-y-4 bg-white border"
        >
          {AllOrders.length > 0 ? (
            AllOrders.map((item: productsType) => {
              return <EditProduct key={item._id} item={item}></EditProduct>;
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
              continue
            </Button>
            <Link to="/shop/listing">
              <Button
                data-test="back"
                className="mt-4"
                block
                type="primary"
                htmlType="submit"
              >
                back
              </Button>
            </Link>
          </Flex>
        </Col>
      </Row>
    </div>
  );
}

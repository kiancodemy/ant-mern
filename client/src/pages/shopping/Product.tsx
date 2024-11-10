import { useParams } from "react-router-dom";
import { setOrder } from "../../store/slices/OrderSlice";
import { useAppDispatch } from "../../hooks/reduxHook";
import { useProductByIdQuery } from "../../store/api/productapi";
import { Button, Col, Row, Image, Flex, Card, Divider, Select } from "antd";
import { useState } from "react";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export default function Product() {
  const { id } = useParams();
  const [quantity, setquantity] = useState<number>(1);
  const navigate = useNavigate();

  const handleChange = (value: number) => {
    setquantity(Number(value));
  };

  const dispatch = useAppDispatch();

  const { data, isLoading } = useProductByIdQuery(id);

  ///handlesubmit function///
  const handlesubmit = () => {
    dispatch(setOrder({ ...data, quantity }));
    navigate(`/shop/checkout`);
  };

  const generateOptions = (num: number) =>
    Array.from({ length: num }, (_, i) => ({
      value: i + 1,
      label: i + 1,
    })).concat([]);

  return (
    <Row
      justify="center"
      gutter={16}
      className="mt-10 gap-y-4 bg-[#f7f8f9] py-16 "
    >
      <>
        <Col xs={{ span: 20 }} md={{ span: 7 }}>
          <Card loading={isLoading} hoverable bordered>
            <Image
              width="100%"
              className="object-cover"
              height="auto"
              src={data?.Image}
            ></Image>
          </Card>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 7 }}>
          <Card loading={isLoading} hoverable bordered title={data?.Title}>
            <Flex className="px-4" vertical>
              <Flex gap="small" className=" text-lg font-semibold ">
                <span>Price:</span>
                <span>{data?.Price}$</span>
              </Flex>
              <Divider></Divider>

              <Flex gap="small" className=" text-lg font-semibold ">
                <span>Brand:</span>
                <span>{data?.Brand}</span>
              </Flex>
              <Divider></Divider>

              <Flex vertical gap="small" className="font-semibold  text-lg ">
                <span>Description:</span>
                <span>{data?.Description}</span>
              </Flex>
            </Flex>
          </Card>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 7 }}>
          <Card loading={isLoading} hoverable bordered>
            <Flex className="px-4 text-lg" vertical>
              <Flex gap="middle" className=" font-semibold ">
                <span>Price:</span>
                <span>{data?.Price}$</span>
              </Flex>
              <Divider></Divider>
              <Flex gap="middle" className=" font-semibold capitalize ">
                <span>availability:</span>
                {data?.TotalStock > 0 ? (
                  <span className="text-green-500">available</span>
                ) : (
                  <span className="text-red-500">unavailable</span>
                )}
              </Flex>
              <Divider></Divider>
              <Flex
                justify="space-between"
                className=" capitalize font-semibold "
              >
                <span>quantity</span>
                <Select
                  placement={"bottomLeft"}
                  defaultValue={quantity}
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={generateOptions(data?.TotalStock)}
                />
              </Flex>
              <Divider></Divider>
              <Flex vertical gap={10}>
                <Button
                  size="large"
                  onClick={handlesubmit}
                  disabled={data?.TotalStock === 0}
                  type="primary"
                >
                  <span className="text-lg py-3 capitalize"> add to cart</span>
                </Button>
                <Button
                  onClick={() => navigate(`/shop/listing`)}
                  block
                  className="capitalize"
                  type="primary"
                  size="large"
                >
                  <DoubleLeftOutlined />
                  back
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Col>
      </>
    </Row>
  );
}

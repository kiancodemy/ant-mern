import { useParams } from "react-router-dom";
import { setOrder } from "../../store/slices/OrderSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { useProductByIdQuery } from "../../store/api/productapi";
import { Button, Col, Row, Image, Flex, Card, Divider, Select } from "antd";
import { useState } from "react";
export default function Product() {
  const [quantity, setquantity] = useState<number>(1);

  ///change quantity
  const handleChange = (value: number) => {
    setquantity(Number(value));
  };
  //redux toolkit config//
  const dispatch = useAppDispatch();

  ////params//

  const { id } = useParams();

  /// get by id configuration//
  const { data, isLoading } = useProductByIdQuery(id);

  ///handlesubmit function///
  const handlesubmit = () => {
    console.log({ ...data, quantity });
    dispatch(setOrder({ ...data, quantity }));
  };

  const generateOptions = (num: number) =>
    Array.from({ length: num }, (_, i) => ({
      value: i + 1,
      label: i + 1,
    })).concat([]);

  ///main tsx//

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

              <Button
                size="large"
                onClick={handlesubmit}
                disabled={data?.TotalStock === 0}
                type="primary"
              >
                <span className="text-lg py-3 capitalize"> add to cart</span>
              </Button>
            </Flex>
          </Card>
        </Col>
      </>
    </Row>
  );
}

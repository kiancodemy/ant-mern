import { useParams } from "react-router-dom";
import { useProductByIdQuery } from "../../store/api/productapi";
import {
  Button,
  Col,
  Row,
  Image,
  Flex,
  Skeleton,
  Card,
  Divider,
  Select,
} from "antd";

export default function Product() {
  const { id } = useParams();
  const { data, isLoading } = useProductByIdQuery(id);

  return (
    <Skeleton loading={isLoading}>
      <Row
        typeof="flex"
        align="stretch"
        justify="center"
        gutter={16}
        className="mt-10 bg-[#edeef1] py-16 "
      >
        <Flex justify="center">
          <Col xs={{ span: 20 }} md={{ span: 7 }}>
            <Card hoverable bordered>
              <Image
                width="100%"
                className="object-cover"
                height="auto"
                src={data?.Image}
              ></Image>
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 7 }}>
            <Card hoverable bordered title={data?.Title}>
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
            <Card hoverable bordered>
              <Flex className="px-4 text-lg" vertical gap={15}>
                <Flex gap="middle" className=" font-semibold ">
                  <span>Price:</span>
                  <span>{data?.Price}$</span>
                </Flex>
                <Flex gap="middle" className=" font-semibold ">
                  <span>
                    {data?.TotalStock > 0 ? (
                      <span className="text-green-500">available</span>
                    ) : (
                      <span className="text-red-500">unavailable</span>
                    )}
                  </span>
                </Flex>
                <Flex
                  justify="space-between"
                  className=" capitalize font-semibold "
                >
                  <span>quantity</span>
                  <Select
                    defaultValue={1}
                    style={{ width: 120 }}
                    /*onChange={handleChange}*/
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                </Flex>

                <Button disabled={data?.TotalStock === 0} type="primary">
                  add to cart
                </Button>
              </Flex>
            </Card>
          </Col>
        </Flex>
      </Row>
    </Skeleton>
  );
}

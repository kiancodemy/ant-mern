import { Col, Card, Image, Row, Flex, Button, Skeleton } from "antd";
import { productsType } from "../../types/user";
import { useAllProductssQuery } from "../../store/api/productapi";

import { useAppSelector } from "../../hooks/reduxHook";
import { RootState } from "../../store/store";
function CardProduct() {
  const { category, sort, brand } = useAppSelector(
    (state: RootState) => state.persistedReducer.productAuth
  );
  const { data, isLoading } = useAllProductssQuery({ category, brand, sort });

  return (
    <Skeleton loading={isLoading}>
      <Row
        gutter={16}
        wrap
        align="top"
        justify="start"
        className="mt-8 gap-y-8 md:pb-20 pb-10 px-8 rounded-md overflow-hidden"
      >
        {data?.info?.map((item: productsType) => {
          return (
            <Col
              key={item._id}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Card hoverable loading={isLoading}>
                <Image
                  width="100%"
                  className="object-cover"
                  height="auto"
                  src={item.Image}
                ></Image>
                <Flex
                  className="border rounded-md font-medium border-gray-200 p-3"
                  vertical
                  gap={10}
                >
                  <p className="[&>*]:font-bold capitalize flex gap-x-3">
                    <span>title:</span>
                    {item.Title}
                  </p>

                  <p className="[&>*]:font-bold flex gap-x-3 capitalize">
                    <span>category:</span>
                    {item.Category}
                  </p>
                  <p className="[&>span]:font-bold capitalize">
                    <span>brand:</span>
                    {item.Brand}
                  </p>
                  <p className="[&>*]:font-bold capitalize">
                    <span>price</span>
                    {item.Price}
                  </p>
                  <p>
                    {item.TotalStock > 0 ? (
                      <span className="capitalize font-bold text-blue-600">
                        available
                      </span>
                    ) : (
                      <span className="capitalize font-bold text-red-500">
                        not available
                      </span>
                    )}
                  </p>
                </Flex>
                <Flex
                  vertical
                  className="py-4"
                  align="center"
                  justify="space-between"
                >
                  <Button
                    disabled={item.TotalStock === 0}
                    className="capitalize"
                    type="primary"
                    size="large"
                  >
                    Add to cart
                  </Button>
                </Flex>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Skeleton>
  );
}
export default CardProduct;

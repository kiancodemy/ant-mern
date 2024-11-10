import { Col, Card, Image, Row, Flex, Button, Modal, message } from "antd";
import { productsType } from "../../types/user";
import { useState } from "react";
import UpdateModel from "./UpdateModel";
import React from "react";
import {
  useGetAllProductsQuery,
  useAdmindeleteMutation,
} from "../../store/api/adminApi";

function ProductCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [UpdatedItem, setUpdatedItem] = useState({});

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Fetch All Data //
  const { data, isLoading } = useGetAllProductsQuery(1);
  const openModels = (data: any) => {
    setUpdatedItem(() => data);

    setIsModalOpen(true);
  };
  const [deleting] = useAdmindeleteMutation();

  const DeleteFunction = async (id: string) => {
    try {
      await deleting(id);
      message.success("Delete successfully");
    } catch (err) {
      message.error("failed to Delete ");
    }
  };

  return (
    <Row
      gutter={16}
      wrap
      align="top"
      justify="start"
      className="mt-8 p-10 rounded-md overflow-hidden"
    >
      {data?.info?.length === 0 && (
        <Col span={24}>
          <h1 className="capitalize font-semibold bg-blue-500 text-center text-xl text-white py-7 rounded-md">
            add new product!!!
          </h1>
        </Col>
      )}
      {data?.info?.map((item: productsType) => {
        return (
          <Col
            key={item._id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
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
              </Flex>
              <Flex className="py-4" align="center" justify="space-between">
                <Button
                  className="capitalize"
                  type="primary"
                  size="large"
                  onClick={() => openModels(item)}
                >
                  updated
                </Button>

                <Button
                  size="large"
                  className="capitalize"
                  type="primary"
                  danger
                  onClick={() => DeleteFunction(item._id)}
                >
                  delete
                </Button>
              </Flex>
            </Card>
          </Col>
        );
      })}
      <Modal
        title="Update your Product"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            size="large"
            key="submit"
            type="primary"
            danger
            onClick={handleCancel}
          >
            cancel
          </Button>,
        ]}
      >
        <UpdateModel
          setIsModalOpen={setIsModalOpen}
          UpdatedItem={UpdatedItem}
        ></UpdateModel>
      </Modal>
    </Row>
  );
}
export default React.memo(ProductCard);

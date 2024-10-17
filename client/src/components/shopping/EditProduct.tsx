import { Col, Row, Image, Select, Button } from "antd";
import { useAppDispatch } from "../../hooks/reduxHook";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteOrder } from "../../store/slices/OrderSlice";
import { productsType } from "../../types/user";
export default function EditProduct({
  item,

  final = false,
}: {
  item: productsType;
  key: string;
  final?: boolean;
}) {
  const dispatch = useAppDispatch();

  return (
    <Row
      gutter={8}
      justify="center"
      align="middle"
      key={item._id}
      className="rounded-md overflow-hidden"
    >
      <Col span={6}>
        <Image width="100%" alt={item.Title} src={item.Image}></Image>
      </Col>

      <Col span={4}>
        <h1 className="text-center">{item.Title}</h1>
      </Col>

      <Col className="text-lg font-semibold flex justify-center py-2" span={5}>
        {item.quantity} * {item.Price}
      </Col>
      {!final && (
        <Col span={4}>
          <Select defaultValue={item.quantity} className="w-full"></Select>
        </Col>
      )}
      <Col span={5}>
        {!final && (
          <div className="flex justify-center items-center">
            <Button
              onClick={() => dispatch(deleteOrder(item._id))}
              type="primary"
            >
              <DeleteOutlined className="text-lg" />
            </Button>
          </div>
        )}
      </Col>
    </Row>
  );
}

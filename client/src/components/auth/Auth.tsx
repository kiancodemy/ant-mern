import { Outlet } from "react-router-dom";
import { Col, Row, Flex, Typography } from "antd";
const { Paragraph } = Typography;
export default function Auth() {
  return (
    <div>
      <Row style={{ minHeight: "100vh" }}>
        <Col xs={{ span: 0 }} lg={{ span: 12 }}>
          <Flex
            className="bg-black min-h-screen p-20"
            justify="center"
            align="center"
          >
            <Paragraph
              strong
              style={{
                textTransform: "capitalize",
                textAlign: "center",
                padding: "20px",

                fontSize: "40px",
                color: "white",
              }}
            >
              welcome to ecommerce shopping
            </Paragraph>
          </Flex>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Flex style={{ minHeight: "100vh" }} justify="center" align="center">
            <Outlet></Outlet>
          </Flex>
        </Col>
      </Row>
    </div>
  );
}

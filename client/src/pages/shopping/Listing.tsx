import Filter from "../../components/shopping/Filter";
import { Col, Flex, Row } from "antd";

import SortComponent from "../../components/shopping/SortComponent";
import CardProduct from "../../components/shopping/CardProduct";

export default function Listing() {
  return (
    <Row className=" sm:p-5 md:p-10">
      <Col xs={{ span: 0 }} md={{ span: 6 }}>
        <Filter></Filter>
      </Col>
      <Col xs={{ span: 22 }} md={{ span: 18 }}>
        <Flex justify="end" align="center" gap={4}>
          <SortComponent></SortComponent>
        </Flex>
        <CardProduct></CardProduct>
      </Col>
    </Row>
  );
}

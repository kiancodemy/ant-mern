import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
export default function Admin() {
  return (
    <Row className=" min-h-screen" justify="center">
      <Col className="p-4  bg-side" xs={0} md={5}>
        <Sidebar></Sidebar>
      </Col>
      <Col xs={24} md={19}>
        <Header></Header>
        <Outlet></Outlet>
      </Col>
    </Row>
  );
}

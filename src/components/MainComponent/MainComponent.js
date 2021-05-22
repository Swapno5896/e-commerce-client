import React from "react";
import ShowProducts from "../ShowProducts/ShowProducts";
import { Container, Row, Col } from "react-bootstrap";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightCart from "../RightCart/RightCart";

const MainComponent = () => {
  return (
    <Container>
      <Row>
        {/* <Col>
          
          </Col> */}
        <Col xs={12} md={3}>
          <LeftSidebar></LeftSidebar>
        </Col>
        <Col xs={12} md={6}>
          <ShowProducts></ShowProducts>
        </Col>
        <Col xs={12} md={3}>
          <RightCart></RightCart>
        </Col>
      </Row>
      {/* <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row> */}
    </Container>
  );
};

export default MainComponent;

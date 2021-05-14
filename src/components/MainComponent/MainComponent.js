import React from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';
import { Container,Row,Col} from 'react-bootstrap';

const MainComponent = () => {
    return (
        <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={12} md={6}><ShowProducts></ShowProducts></Col>
          <Col>3 of 3</Col>
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
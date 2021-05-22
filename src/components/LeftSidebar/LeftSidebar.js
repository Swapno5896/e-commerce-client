import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Form, Row, Col } from "react-bootstrap";

const LeftSidebar = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <>
        <p>Services</p>
        <Form.Check label={`Installment`} aria-label="option 1" />
        <Form.Check label={`Cash On Delevary`} aria-label="option 1" />
        <Form.Check label={`Installment`} aria-label="option 1" />
        <Form.Check label={`Freeshiping`} aria-label="option 1" />
      </>
      <hr />
      <>
        <p>Location</p>
        <Form.Check label={`China`} aria-label="option 1" />
        <Form.Check label={`China`} aria-label="option 1" />
        <Form.Check label={`Bangladesh`} aria-label="option 1" />
        <Form.Check label={`India`} aria-label="option 1" />
      </>
      <hr />
      <Form>
        <Form.Row>
          <Col>
            <RangeSlider
              min={10}
              max={40}
              tooltip='on'
              value={value}
              onChange={(changeEvent) => setValue(changeEvent.target.value)}
            />
          </Col>
          <Col xs="3">
          <Form.Control value={value}/>
        </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default LeftSidebar;

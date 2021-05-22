import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import CartDetail from "../CartDetail/CartDetail";
import './RightCart.css'
const RightCart = () => {
  return (
    <div id='cart-container'>
      <Card >
        <ListGroup variant="flush" id='Cart-items'>
            <p>Subtotal : 100</p>
            <p>Pickup Savings : -7.99</p>
            <p> Est. taxes and fees (Based on V042) : 10.33</p>
            <p>Est. Total: $97</p>
            <p>See item Detail</p>
            <CartDetail></CartDetail>
        </ListGroup>
      </Card>
    </div>
  );
};

export default RightCart;

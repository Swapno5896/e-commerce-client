import React from "react";
import './ShowProductCard.css'
import { Card, Button,Spinner } from "react-bootstrap";
import laptop from '../../images/laptop.jfif'
const ShowProductCard = () => {
  return (
    <div>
      <Card>
          <div className='product-header'>
          <img className='product-img'  src={laptop} alt="" />
        <p>Laptop Price in India is Rs. 26,490. </p>
          </div>
      
        <Card.Body>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        <button>add to cart</button>
        <button> Show Detail</button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ShowProductCard;

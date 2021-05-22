import React, { useState } from "react";
import { Card, Button,Spinner } from "react-bootstrap";
import ShowProductCard from "../ShowProductCard/ShowProductCard";

const ShowProducts = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div>
       
    
      
            <Spinner animation="border" variant="secondary" /> 
        
    
       
      <ShowProductCard></ShowProductCard>
    </div>
  );
};

export default ShowProducts;

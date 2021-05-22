import React from "react";
import "./CartDetail.css";
import samllImg from "../../images/samll img.jpeg";
const CartDetail = () => {
  return (
    <div id="CartDetail-container">
      <div className="CartDetail-header detail-item" >
        <img style={{ width: "50px" }} src={samllImg} alt="" />
        <p>Dxracer Formula Gaming Chair (Black/Red)</p>
      </div>
      <div className="CartDetail-header">
        <p>cost : 30.33</p>
        <p> pices : 3</p>
      </div>
      <div className="detail-item">
        <button className="detail-btn">Detail</button>
        <button className="detail-btn">Detail</button>
      </div>
    </div>
  );
};

export default CartDetail;

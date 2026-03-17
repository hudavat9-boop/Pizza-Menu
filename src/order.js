import React from "react";

function OrderButton(){
  const placeorder = () =>{window.location.href = "./order.js"};
  return(
    <>
    <button className="orderbutton" onClick={placeorder}>Add to Counter</button>
    </>
  )
}

export default OrderButton;

// navo code add karyo ae git hub par nakhshu

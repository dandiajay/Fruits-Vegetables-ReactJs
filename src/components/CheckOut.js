import React from "react";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import SubTotal from "./SubTotal";
import Header from "./Header";
import fruit from '../assets/Images/footer.png'

const CheckOut = () => {
  const [{ basket }] = useStateValue();
  

  return (
    <>
      <Header />
      <div className='container-fluid ' style={{marginTop:"120px"}} >
      <div className="row mt-5">
        <div className="col-7">
        <img src={fruit} className='w-100' style={{height:"200px"}}/>
            <h2>Your Shooping Cart</h2>
          {basket.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            basket.map(item => (
              <CheckOutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                quantity={item.quantity} // Pass quantity to CheckOutProduct
              />
            ))
          )}
        </div>
        <div className='col-5'>
          <SubTotal />
        </div>
      </div>
      </div>
    </>
  );
};

export default CheckOut;

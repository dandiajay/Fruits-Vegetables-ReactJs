
import React, { useState } from "react";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, title, image, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  const product = basket.find(item => item.id === id); // Find the product in the basket

  const handleAddQuantity = () => {
    // Logic to handle increasing quantity
    dispatch({
      type: 'UPDATE_QUANTITY',
      index: basket.findIndex(item => item.id === id),
      quantity: product.quantity + 1,
    });
    setQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    // Logic to handle decreasing quantity
    if (product.quantity > 1) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        index: basket.findIndex(item => item.id === id),
        quantity: product.quantity - 1,
      });
    }
    if (quantity > 1) {
            setQuantity(quantity - 1);
          }
  };

  const getTotalPrice = () => {
    return (product.quantity * price).toFixed(2);
  };



  return (
    <div className="checkout-product d-flex mb-3 col-8 w-100">
      <div className="checkout-product__image" style={{width:"150px"}}>
        <img src={image} alt={title} className='w-100 img-fluid' />
      </div>
      <div className="checkout-product__info col-4">
        <h4>{title}</h4>
        <p>1kg: ${price}</p>
        <div className="d-flex  ">
          <button onClick={handleAddQuantity}>+</button>
          <p className="m-2">{quantity}</p>
          <button onClick={handleRemoveQuantity}>-</button>
        </div>
        <p>Price: ${getTotalPrice()}</p>
        <button onClick={removeFromCart} className="btn btn-warning  ">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;

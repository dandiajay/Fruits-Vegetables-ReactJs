import React from 'react';
import { useStateValue } from './StateProvider';

const SubTotal = () => {
  const [{ basket }] = useStateValue();

  const calculateSubtotal = () => {
    return basket.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = parseInt(item.quantity);

      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
        return total + (itemPrice * itemQuantity);
      } else {
        console.error('Invalid price or quantity for item:', item);
        return total;
      }
    }, 0).toFixed(2);
  };

  return (
    <div className="bg-light p-3 mt-4">
      <p>Total Price ({basket.length} items): ${calculateSubtotal()}</p>
      
    </div>
  );
};

export default SubTotal;


export const initialState = {
  basket: [],
};

export const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
  const existingItemIndex = state.basket.findIndex(item => item.id === action.item.id);
  let updatedCart;

  if (existingItemIndex !== -1) {
    // If the item exists, update its quantity
    updatedCart = state.basket.map((item, index) => {
      if (index === existingItemIndex) {
        return {
          ...item,
          quantity: item.quantity + action.item.quantity // Increment quantity if the same item is added again
        };
      }
      return item;
    });
  } else {
    // If the item is not in the basket, add it
    updatedCart = [...state.basket, action.item];
  }

  return {
    ...state,
    basket: updatedCart,
  };

  

    case 'UPDATE_QUANTITY':
      const updatedBasket = [...state.basket];
      updatedBasket[action.index] = {
        ...updatedBasket[action.index],
        quantity: action.quantity,
      };
      return {
        ...state,
        basket: updatedBasket,
      };

      case actionTypes.REMOVE_FROM_CART:
  const removeBasket = state.basket.filter(item => item.id !== action.id);
  return {
    ...state,
    basket: removeBasket,
  };


    default:
      return state;
  }
};

export default reducer;

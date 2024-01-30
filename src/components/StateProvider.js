

import React, { createContext, useContext, useReducer } from 'react';
import reducer from './Reducer'; // Import your Reducer

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const initialState = {
    basket: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

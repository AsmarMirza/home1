import React, { createContext, useEffect, useState } from "react";
import UseLocaLStorage from "../hooks/useLocaLStorage";

export const MainContext = createContext();


function MainProvider({ children }) {
  const [basket, setBasket] = UseLocaLStorage("basket",[]);



  function addBasket(item) {
    const index = basket.findIndex((x) =>  x._id === item._id);
    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }


  function removeBasket(item) {
    setBasket(basket.filter((x) => x._id !== item._id));
  }
  function decreaseBasket(item){
    const index=basket.findIndex((x)=>x._id=== item._id)
    if (basket[index].count>1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }
  
  return (
    <div>
      <MainContext.Provider value={{ addBasket, basket, removeBasket,decreaseBasket }}>
        {children}
      </MainContext.Provider>
    </div>
  );
}

export default MainProvider;


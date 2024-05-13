import React, { createContext, useEffect, useState } from 'react'


 export const MainContext=createContext()
function MainProvider({children}) {

    const [basket, setBasket] = useState([])
    useEffect(() => {
     
    }, [])
    function addBasket(item){
  const index=  basket.findIndex((x)=>x.id===item._id)
  if (index!==-1) {
    basket[index].count++
    setBasket([...basket])
  }
  else{
    setBasket([...basket,{...item,count:1}])
  }

    }

    function removeBasket(item){      
     setBasket( basket.filter((x)=>x.id!==item.id))
    }
    
  return (
    <div>
      <MainContext.Provider value={{addBasket,basket,removeBasket}}>


        {children}
      </MainContext.Provider>
    </div>
  )
}

export default MainProvider

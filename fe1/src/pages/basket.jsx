import React, { useContext } from 'react'
import { MainContext } from '../context/mainProvider'


function Basket() {
  const {basket,addBasket,removeBasket,decreaseBasket}=useContext(MainContext)
  return (
    <div style={{width:"100%",display:"flex",flexWrap:"wrap",gap:"20px"}}>
    {basket.map((x)=>(
      <div style={{width:"300px",height:"300px",textAlign:"center",border:"1px solid black"}} key={x.id}>
          <h3>{x.name}</h3>
          <p>{x.age}</p>
          <p>{x.job}</p>
          <p>Count:{x.count}</p>
          <button onClick={()=>addBasket(x)}>+</button>
          <button onClick={()=>decreaseBasket(x)} >-</button>
          <button onClick={()=>removeBasket(x)}>remove basket</button>
          {/* <button onClick={()=>deleteTeacher(x._id)}>delete</button> */}
      </div>
    ))}
  </div>
  )
}

export default Basket

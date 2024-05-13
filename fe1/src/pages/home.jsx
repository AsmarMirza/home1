import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainProvider'

function Home() {

  const {addBasket}=useContext(MainContext)
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
 async function getAllTeachers(){
    const res=await fetch("http://localhost:3000/teacher")
    const data=await res.json()
    setTeachers(data)
 }
 getAllTeachers()
    
    }, [])
    // async function deleteTeacher(id){
    //     const res=await fetch("http://localhost:3000/teacher/"+id,{method:"delete"})
    //     const data= await res.json()
    //     return data
    // }
    // deleteTeacher()
  return (
    <div style={{width:"100%",display:"flex",flexWrap:"wrap",gap:"20px"}}>
      {teachers.map((x)=>(
        <div style={{width:"300px",height:"300px",textAlign:"center",border:"1px solid black"}} key={x.id}>
            <h3>{x.name}</h3>
            <p>{x.age}</p>
            <p>{x.job}</p>
            <button onClick={()=>addBasket(x)}>add basket</button>
            {/* <button onClick={()=>deleteTeacher(x._id)}>delete</button> */}
        </div>
      ))}
    </div>
  )
}

export default Home

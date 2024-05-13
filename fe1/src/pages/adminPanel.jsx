import React, { useEffect, useState } from 'react'
 
import "./index.css"
import { Link } from 'react-router-dom'
function AdminPanel() {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
 
 getAllTeachers()
    
    }, [])

    async function getAllTeachers(){
        const res=await fetch("http://localhost:3001/teacher")
        const data=await res.json()
        setTeachers(data)
     }

    async function deleteTacher(id){
      const res= await  fetch("http://localhost:3001/teacher/"+id,{method:"delete"}) 
      const data= await res.json()
      getAllTeachers()
    }

  
  return (
    <div>
<table>
    <thead>
  <tr> 
    <th>Name</th>
    <th>Age</th>
    <th>Job</th>
    <th>Options</th>
  </tr>
  </thead>
  <tbody>
  {teachers.map((x)=>(

  <tr key={x.id}>
    <td>{x.name}</td>
    <td>{x.age}</td>
    <td>{x.job}</td>
    <td>
    <button><Link to={"/update"}>update</Link></button>
    <button onClick={()=>deleteTacher(x._id)}>delete</button>
    </td>
  </tr>
  ))}
  </tbody>

</table>
    </div>
  )
}

export default AdminPanel
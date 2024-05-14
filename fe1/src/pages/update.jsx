import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function Update() {


    async function updateTeacher(values){
      const res=await fetch("http://localhost:3001/teacher/"+id,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({values})
      })
      const data=await res.json()
      return data
    }
  return (
    <div>
    <Formik
       initialValues={{ name:"", age: '', job: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(100, 'Must be 15 characters or less')
           .required('Required'),
         age: Yup.string()
           .max(100, 'Must be 20 characters or less')
           .required('Required'),
         job: Yup.string().required('Required')
       })}
       onSubmit={(values,{ resetForm }) => {
        updateTeacher(values);
         resetForm();
       <Navigate to={"/"}/>
       }}
     >
       <Form>
         <label htmlFor="name"> name</label> <br />
         <Field name="name" type="text" />  <br />
         <ErrorMessage name="name" />
 
         <label htmlFor="age"> age</label><br />
         <Field name="age" type="number" /><br />
         <ErrorMessage name="age" />
 
         <label htmlFor="job">job</label><br />
         <Field name="job" type="text" /><br />
         <ErrorMessage name="job" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Update
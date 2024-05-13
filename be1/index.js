import express from 'express'
const app = express()
const port = 3000
import cors from 'cors'

app.use(cors())
import mongoose from 'mongoose';

app.use(express.json())


const teachersSchema= new  mongoose.Schema({
    name:String,
    age:Number,
    job:String
})

const studentsSchema= new  mongoose.Schema({
    name:String,
    age:Number,
    class:Number
})


const teachers=mongoose.model("teacher",teachersSchema)
const students=mongoose.model("student",studentsSchema)

mongoose.connect('mongodb+srv://Esmer:esmer123@cluster0.zbeu6hy.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(()=>console.log("not connected!"))

app.get('/teacher', async (req, res) => {
    const getTeachers= await teachers.find()
  res.send(getTeachers)
})

app.get('/teacher/:id', async (req, res) => {
let {id}=req.params
    const getTeacherById= await teachers.findById(id)
  res.send(getTeacherById)
})

app.post('/teacher', async (req, res) => {
    const obj=req.body
    const postTeacher= new teachers(obj)
    await postTeacher.save()
    res.send('posted new data')
  })


  app.delete('/teacher/:id', async (req, res) => {
    let {id}=req.params
    const deletedTeacher= await teachers.findByIdAndDelete(id)
    res.send('data deleted')
  })

  app.put('/teacher/:id', async (req, res) => {
    let {id}=req.params
    const obj=req.body
    const updateTeacher= await teachers.findByIdAndUpdate(id,obj)
    res.send('data updated')
  })





  app.get('/students', async (req, res) => {
    const getAllStudents= await students.find()
    res.send(getAllStudents)
  })
 
  app.get('/students/:id', async (req, res) => {
    let {id}=req.params
    const getStudentById= await students.findById(id)
    res.send(getStudentById)
  })


  app.post('/students', async (req, res) => {
    const obj=req.body
    const postedStudent= new students(obj)
    await postedStudent.save()
    res.send('Got a POST request')
  })
 
  
  app.put('/students/:id', async (req, res) => {
    let {id}=req.params
    const obj=req.body
    const updateStudent=await students.findByIdAndUpdate(id,obj)
    res.send('Got a PUT request at /student')
  })
  
  
  app.delete('/students/:id', async (req, res) => {
    let {id}=req.params
    const deleteStudent=await students.findByIdAndDelete(id)
    res.send('Got a DELETE request at /student')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from 'express'
import { createdata, deletedata, editdata, getdata, updatedata } from '../controller/crudcontroller.js'

const route = express.Router()

route.post("/create",createdata)
route.get("/get",getdata)
route.get("/edit/:userid",editdata)
route.put("/update/:userid",updatedata)
route.delete("/delete/:userid",deletedata)

export default route

// http://localhost:5000/api/crud/create
// http://localhost:5000/api/crud/get
// http://localhost:5000/api/crud/edit
// http://localhost:5000/api/crud/update
// http://localhost:5000/api/crud/delete
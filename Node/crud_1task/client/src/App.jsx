import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {
  
  const[formdata,setformdata] = useState({name:"",email:"",age:""})
  const[store,setStore] = useState([])
  const[edit,setEdit] = useState("")

  const handleChange = (e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }

  const handleAdd = async(e)=>{

    e.preventDefault()

    try {

      const add = await axios.post("http://localhost:5000/api/crud/create",formdata)
      alert(add.data.msg)
      setformdata({name:"",email:"",age:""})

      
    } catch (error) {

      alert(error.response.data.msg)
      
    }
  }

  const fetchdata = async ()=>{

    try {

      const fetch = await axios.get("http://localhost:5000/api/crud/get")
      setStore(fetch.data.getdata)
      
    } catch (error) {

      alert(error.response.data.msg)
      
    }

    
      

  }

  useEffect(()=>{
    (async()=>{
      fetchdata()
    })()
  },[])

  const handleEdit = (user)=>{
    setformdata({name:user.name,email:user.email,age:user.age})
    setEdit(user._id)
  }

  const handleUpdate = async(e)=>{
    e.preventDefault()
      try {

        const update = await axios.put(`http://localhost:5000/api/crud/update/${edit}`,formdata)
        alert(update.data.msg)
        setformdata({name:"",email:"",age:""})
        setEdit("")
        fetchdata()
        
      } catch (error) {
        alert(error.response.data.msg)
        
      }

  }

  const handleDelete = async (userid)=>{

    try {

      const datas = await axios.delete(`http://localhost:5000/api/crud/delete/${userid}`)
      alert(datas.data.msg)
      fetchdata()
      
    } catch (error) {
      alert(error.response.data.msg)
      
    }

  }


  return (
    <>
    <form >
      <input type="text" name='name' value={formdata.name} placeholder='Enter your name ' className='bg-black text-white m-5 h-10 rounded'onChange={handleChange} />
      <input type="email" name='email' value={formdata.email} placeholder='Enter your email' className='bg-black text-white m-5 h-10 rounded' onChange={handleChange}  />
      <input type="number" name='age' value={formdata.age} placeholder='Enter your age' className='bg-black text-white m-5 h-10 rounded' onChange={handleChange}  />
      {edit?<button className='bg-black text-white w-20 h-10 rounded' onClick={handleUpdate}>Update</button>:
      <button onClick={handleAdd} className='bg-black text-white w-20 h-10 rounded'>Add</button>}
      
    </form>

    <table border={5} className='m-2'>
      <thead className='border-2 '>
        <tr className='border-2'>
          <th className='border-2 w-20' >S.no</th>
          <th className='border-2 w-20'>Name</th>
          <th className='border-2 w-30'>Email</th>
          <th className='border-2 w-20'>Age</th>
          <th className='border-2 w-50'>Action</th>
        </tr>
      </thead>

      <tbody>
        {store.map((e,i)=>(
            <tr className='border-2' key={i}>
          <td className='border-2'>{i+1}</td>
          <td className='border-2'>{e.name}</td>
          <td className='border-2'>{e.email}</td>
          <td className='border-2'>{e.age}</td>
          <td className='border-2'><button onClick={()=>handleEdit(e)} className='bg-red-500 w-20 text-black'>Edit</button> ||  <button onClick={()=>handleDelete(e._id)} className='bg-red-500 w-20 text-black'>Delete</button></td>
        </tr>

        ))}
        
      </tbody>
    </table>
    
    </>
  )
}

export default App

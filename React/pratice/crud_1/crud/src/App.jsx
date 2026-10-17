import React, { useState } from 'react'

const App = () => {

  const [form,setForm] = useState({name:"",email:"",age:""})

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  



  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name='name' value={form.name} onChange={handleChange} className='bg-black rounded text-white m-5 h-8' type="text" placeholder='Enter your name'  />
      <input name='email' value={form.email} onChange={handleChange} className='bg-black rounded text-white m-5 h-8' type="email" placeholder='Enter your email' />
      <input name='age' value={form.age} onChange={handleChange} className='bg-black rounded text-white m-5 h-8' type="number" placeholder='Enter your age' />
      <input className='bg-black text-white w-23 h-8 rounded' type="submit" value="Register" />
    </form>
    
    
    </>
  )
}

export default App

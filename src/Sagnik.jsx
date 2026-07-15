import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sagnik = () => {
  const nevigate = useNavigate()
  return (
    <div>
      <h1>This is Sagnik.</h1>
      <button onClick={()=>nevigate('Register')}>Register</button>
       <button onClick={()=>nevigate('PrevCount')}>prevcount</button>

    </div>
  )

}

export default Sagnik

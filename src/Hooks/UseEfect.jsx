import React, { useEffect } from 'react'
// shorcut//refc type
function UseEfect() {

    const [data,setdata]=useState([])

    usef = useEffect(()=>{
     const result = fatch("")
     .then(res=>res.json)
     .then((data)=>setData(data))
    },[])
  return (

    <div>
      
    </div>
  )
}

export default UseEfect

import React,{useState,useRef,useEffect, useContext} from 'react'
import { GlobalVariable} from '../ContextApi/Globalvariable'

const PrevCount = () => {
    const dataname = useContext(GlobalVariable)
        const [count,setCount] = useState(0)
        const prevCount = useRef()

        useEffect(()=>{
        prevCount.current=count;
        },[count])
        console.log(prevCount)
  return (
    <div>
     <p>Name is:{dataname}</p>
      <p>count:{count}</p>
      <p>prev Count:{prevCount.current}</p>
      <button onClick={()=> setCount(count+1)}>Inc</button>
    </div>
  )
}

export default PrevCount

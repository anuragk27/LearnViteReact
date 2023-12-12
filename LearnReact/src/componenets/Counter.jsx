import React from 'react'
import { useState } from 'react'

export const Counter = () => {
  const[Count,setCount]=useState(0)

  const handleClick1=()=>{
    setCount(Count+1)
  }
  const handleClick2=()=>{
    if(Count>0){setCount(Count-1)}
    
  }
  const handleClick3=()=>{
    setCount(0)
  }

  return (
    <>

      <h1>counter : {Count}</h1>
      <button onClick={handleClick1}>Increase</button>
      <button onClick={handleClick2}>Decrease</button>
      <button onClick={handleClick3}>Reset</button>

    </>
    
  )
}

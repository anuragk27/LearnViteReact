import { useMemo, useState } from 'react'

export const LearnUseMemo  = () => {
  const[Count,setCount]=useState(0)

  const handleClick1=()=>{
    console.log("Count increased")
    setCount(Count+1)
  }
  const handleClick2=()=>{
    console.log("Count decreased")
    if(Count>0){setCount(Count-1)}
    
  }
  const handleClick3=()=>{
    setCount(0)
  }

//   const isTenCount=()=>{
//     if(Count==10){
//         return 'Yes'
//     }
//     return 'No'
//   }

const isCountTen= useMemo(()=>{
    console.log("isCountTen called")
    if(Count==10){
        return 'Yes'
    }
    return 'No'
  },[Count])

  return (
    <>

      <h1>is {Count} equal to 10 ?--{isCountTen}</h1>
      <button onClick={handleClick1}>Increase</button>
      <button onClick={handleClick2}>Decrease</button>
      <button onClick={handleClick3}>Reset</button>

    </>
    
  )
}

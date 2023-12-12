import React, { useEffect, useState } from 'react'

export const LearnUseEffect = () => {
  const[randomNumber,setRandomNumber]=useState(null)
  
  const generateRandomNumber=()=>{
    const newRandomNumber=Math.floor(Math.random()*100)+1 
    setRandomNumber(newRandomNumber)
  };

  //Called everytime the component is mounted or re-rendered
  useEffect(()=>{
    console.log('clicked')
  },[])

  // for calling only one time use [] empty array
  // for dependency [generateRandomNumber]
  return (
    <>
    <div>Random Number: {randomNumber}</div> 
    <button onClick={generateRandomNumber}>Click</button>
    </>
    
  )
}

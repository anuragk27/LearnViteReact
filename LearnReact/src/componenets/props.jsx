import React from 'react'

// Method 1
// export const LearnProps = (props) => {
//   return (
//     <div>My Name is : {props.name}</div>
//   )

export const LearnProps = ({name,course}) => {
    return (
        <>
        <h3>My Name is : {name}</h3>
        <h3>Course : {course}</h3>
        </>
      
    )
}

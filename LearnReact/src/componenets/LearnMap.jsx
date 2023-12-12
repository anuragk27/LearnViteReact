import React from "react";

export const LearnMap = () => {
  // Without using Key

  //   const array=[10,20,30,40,50,60,70];
  // return (
  //   <ul>
  //       {
  //           array.map(num=>{
  //               return <li>{num}</li>
  //           })
  //       }
  //   </ul>
  // )

  // With using Key

  const users = [
    { id: 101, name: "luffy" },
    { id: 102, name: "zoro" },
    { id: 103, name: "sanji" },
    { id: 104, name: "nami" },
    { id: 105, name: "usop" },
  ];
  return (
      <ul>
          {
              users.map(user=>{
                  return <li key={user.id}> Name:{user.name}</li>
              })
          }
      </ul>
    )
};

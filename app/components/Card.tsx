import React from 'react'

interface props{
  name:string;
  rollNo:number;
  day:string;
}
export default function Card(props:props){
  return (
    <div>
      <h1>Name:{props.name} </h1>
      <h1>RollNumber: {props.rollNo}</h1>
      <h1>Day : {props.day}</h1>
    </div>
  )
}


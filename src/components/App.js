import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
// import axios from 'axios';

const App = () => {
 
 const [name, setName]= useState("");
 const [data , setData]=useState([]);
 
 useEffect(()=>{
  fetch("https://www.content.newtonschool.co/v1/main/users")
   .then((res)=>res.json())
   .then(({users})=> setName(users));
 });
 
//   axios.get(`
  
 const changeInput=(e)=>{
  setData(e.target.value);
  
 }
//code here 
 



  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;

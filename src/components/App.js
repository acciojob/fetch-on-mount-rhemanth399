
import React from "react";
//import './../styles/App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const[datas,setDatas]=useState([]);
  useEffect(()=>{
      axios.get(' https://jsonplaceholder.typicode.com/posts')
      .then(response=>{
        setDatas(response.data)
       console.log('the data',datas)
      
  })
  .catch(error=>console.log(error))
  }, [])

  
  return (
    <div>
        {datas.map((value,index)=>(<div key={index}>
            <h4>{`${value.id} .${value.title}`}</h4>
            <p>{`${value.body}`}</p>
          </div>
        ))
          
        }
       
    </div>
  )
}

export default App



import React,{Component, useState} from 'react';
import './style.css';
import List from './list.json';
export default function Main(){
    const [searchTerm, setSearchTerm]=useState("");
      return <div className="main">
       <input placeholder="Enter Employee Name ....." onChange={(event)=>{
           setSearchTerm(event.target.value);
       }}></input>
    <table>
{List.filter((val)=>{
    if(searchTerm==''){
        return val;
    }
    else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val;
    }
}).map((val,key)=>{
    return <tr><td>{val.name}</td><td>{val.location}</td></tr>
    
})}
</table>
</div>
    

}
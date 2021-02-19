import React,{Component} from 'react';
import List from './list.json';
import './style.css';
export default class Main extends React.Component{
    render(){
        return (
        <>
        <div className="main">
            <input type="text" id="searchbar" placeholder="Search Your Employees"/>
            <table border="1">
                <tr><th>Name</th><th>Location</th></tr>
            {List.map((employee,index)=>{
            return <tr><td>{employee.name}</td><td>{employee.location}</td></tr>
        }
            )}</table>
        </div>
        </>
        )
    }
}
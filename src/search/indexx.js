import React,{Component} from 'react';
import './style.css';
export default class Main extends React.Component{
    state={
        value:'',
    }
    Search=(event)=>{
      this.setState({
          value:event.target.value,
      })
    }
render()
{
    return <div className="main">
       <input placeholder="Search ....." onChange={this.Search}></input>
    </div>

}
}
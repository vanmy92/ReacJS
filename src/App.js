import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();  
    this.state = {
      monsters:[
        {
          name:'Linda',
          id:'21423'
        },
        {
          name:'Frank',
          id:'214123423'
        },
        {
          name:'Jacky',
          id:'21423asdfasdf'
        },
        {
          name:'Jacky',
          id:'21423adfadsfxz'
        },
      ]
     
    };
  }

  render(){
    return (
      <div className="App">  
    

        {
          this.state.monsters.map((monster)=>{
            return (
              <div key={monster.id}>
                <h1 >{monster.name}</h1>;
              </div>
            ); 
          
           
          })}

    </div>
    );
  }
  
}

export default App;

import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {

  constructor(){
    super();  
    this.state = {
      monsters:[

      ],
      searchField:'',
    };
    // console.log('1');
  }

  componentDidMount(){
    // console.log('3');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
        .then((users) => 
        this.setState(
          ()=>{
            return {monsters:users};
          }       
        ));

  };

  onSearchChange = (event)=>{
    // console.log(event.target.value);
    const searchField =event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField};
    });
  };

  render(){
    // console.log('render');
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonster = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
   });
    return (
      <div className="App">  
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={onSearchChange} />
          
        <CardList monsters={filteredMonster} />
      </div>
    );

  }
  
}

export default App;


// {filteredMonster.map((monster)=>{
//   return (
//     <div key={monster.id}>
//       <h1 >{monster.name}</h1>
//     </div>
//   ); 
// })}

/* {filteredMonster.map((monster)=>{
  return (
    <div key={monster.id}>
      <h1 >{monster.name}</h1>
    </div>
  ); 
})}
 */
import { useState,useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = ()=>{

  const [searchField, setSearchField] =useState('');
  const [monsters, setMonsters] = useState([]);
  const [fieldredMonsters, setFileterMonster]= useState(monsters);

  


  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
      .then((users) => setMonsters(users) 
      );

  }, []);

  useEffect (()=>{
    const newFilteredMonster = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
   });
   setFileterMonster(newFilteredMonster);
  }, [monsters, searchField]);

 



  console.log(searchField);
  const onSearchChange = (event)=>{
    // console.log(event.target.value);
    const searchFieldString =event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


 
  return (
    <div className="App">  
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monster' /> 

      
      
        <CardList monsters={fieldredMonsters} /> 
      </div>
     
  )

}
/* 
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
        <h1 className='app-title'>Monsters Rolodex</h1>
         <SearchBox 
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monster' /> 
        <CardList monsters={filteredMonster} />
      </div>
    );

  }
  
}
*/
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
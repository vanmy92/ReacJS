import { Component } from "react";


class CardList extends Component{

    render(){
        // console.log('render from  ');
        const {monsters}= this.props;

        return (
            <div className='card-List'>
                {monsters.map((monster)=>(
                    <h1 key={monster.id}>{monster.name}</h1>
                    ))}
                
            </div>
        );
    }
}

export default CardList;
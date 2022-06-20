import { Component } from "react";
import './card-list.style.css'
import Card from "../card/car.component";
class CardList extends Component{

    render(){
        // console.log('render from  ');
        const {monsters}= this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster)=> {

                    return    (
                        <Card monster={monster}></Card>
                        
                    )
                })}
                
            </div>
        );
    }
}

export default CardList;
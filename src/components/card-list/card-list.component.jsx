
import './card-list.style.css'
import Card from "../card/car.component";


const CardList =({monsters})=> (
    <div className='card-list'>
    {monsters.map((monster)=> {

        return    (
            <Card monster={monster}></Card>
            
        )
    })}
    
    </div>

)
     

    

export default CardList;
import react from 'react'
import { useNavigate } from 'react-router-dom'
import style from './CardAnimal.module.css'


function CardAnimal(props){
    const navigate = useNavigate();

    return(
        <div className={style.cardAnimal}>    
            <h2 className={style.cardTitle}>{props.name}</h2>
            <img className={style.animalPic} src={props.image} alt="Animal picture"></img>
            <button className={style.adoptButton} onClick={() => navigate ('/')}> Adotar </button>
        </div>
    );
}

export default CardAnimal
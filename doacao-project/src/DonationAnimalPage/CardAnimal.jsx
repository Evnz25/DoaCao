import { useNavigate } from 'react-router-dom'
import style from './DonationAnimalPage.module.css'


function CardAnimal(props){
    const navigate = useNavigate();

    return(
        <div className={style.cardAnimal}>    
            <h2 className={style.cardTitle}>{props.name}</h2>
            <img className={style.animalPic} src={`http://localhost:8080${props.image}`} alt="Imagem do animal"></img>
            <button className={style.adoptButton} onClick={() => navigate (`/animals/${props.id}`)}> Adotar </button>
        </div>
    );
}

export default CardAnimal
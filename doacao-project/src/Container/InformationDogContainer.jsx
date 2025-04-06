import style from './Container.module.css'

function InformationDogContainer(props){
    return(
        <div className={style.informationDog}>
            <div className={style.perfilAnimal}>
                <h2 className={style.informationTitle}>{props.name}</h2>
                <img className={style.informationPhoto} src={`http://localhost:8080${props.image}`} alt={"Animal sem foto"}></img>
            </div>
            <div className={style.characteristicsAnimal}>
                <p>Animal: {props.specie}</p>
                <hr />  
                <p>Idade: {props.age}</p>
                <hr />  
                <p>Sexo: {props.gender}</p>
                <hr />  
                <p>Raça: {props.race}</p>
                <hr />  
            </div>
        </div>
    );
}

export default InformationDogContainer;
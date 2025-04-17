import { useNavigate } from 'react-router-dom'
import style from './Container.module.css'

function InformationDogContainer(props){
    const navigate = useNavigate();

    return(
        <>
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
        <div className={style.medicalCondition}>
            <h1 className={style.vaccines}>
                Vacinas: 
                <li className={style.vaccinesItens}>{props.vaccine}</li>
            </h1>
            <hr />
            <h2 className={style.observationMedical}>
                Observações:
                <p className={style.observationItens}></p>
                    <li>Castrado: {props.castrated}</li>
                    <li>Ferimentos: {props.injuries}</li>
                    <li>Doenças: {props.sickness}</li>
                    <li>Medicamentos: {props.medicine}</li>

            </h2>
            <div className={style.buttons}>
                <button className={style.adopt} onClick={() => navigate ('/donationdog')}>Prosseguir para adoção</button>
                <button className={style.return} onClick={() => navigate ('/donationdog')}>Retornar página anterior</button>
            </div>
        </div>
        </>  
    );
}

export default InformationDogContainer;
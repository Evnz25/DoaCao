import { useNavigate } from 'react-router-dom'
import style from './DonationInformationAnimal'

function InformationDonationContainer(props){
    const navigate = useNavigate();

    return(
        <>
        <div className={style.informationDonation}>
            <div className={style.perfilAnimal}>
                <h2 className={style.donationTitle}>{props.name}</h2>
                <img className={style.donationPhoto} src={`http://localhost:8080${props.image}`} alt={"Animal sem foto"}></img>
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
        <div className={style.clientInformation}>
            <h1 className={style.clientData}>
                DADOS DO RECEPTOR
                <p className={style.clientItens}></p>
                    <li>Nome: {props.clientName}</li>
                    <li>Email: {props.clientEmail}</li>
                    <li>CPF: {props.clientCpf}</li>
                    <li>Telefone: {props.clientTelephone}</li>
                    <li>Estado: {props.clientAdrressState}</li>
                    <li>Cidade: {props.clientAdrressCity}</li>
                    <li>Bairro: {props.clientAdrressNeighborhood}</li>
                    <li>Rua: {props.clientAdrressStreet}</li>
                    <li>Número: {props.clientAdrressNumber}</li>
            </h1>
            <div className={style.buttons}>
                <button className={style.adopt} onClick={() => navigate ('/clientregister')}>Prosseguir para adoção</button>
                <button className={style.return} onClick={() => navigate ('/donationanimal')}>Retornar página anterior</button>
            </div>
        </div>
        </>  
    );
}

export default InformationDonationContainer;
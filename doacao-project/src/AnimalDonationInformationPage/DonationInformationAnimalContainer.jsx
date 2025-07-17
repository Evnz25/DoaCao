import { useNavigate } from 'react-router-dom'
import axios from 'axios'; 
import style from './AnimalDonationInformation.module.css'

function InformationDonationContainer(props){
    const navigate = useNavigate();

    const handleApproveClick = async () => {
        // Confirma se a prop 'id' foi recebida para evitar erros
        if (!props.id) {
            console.error("ID da doação não foi fornecido para aprovação.");
            alert("Erro: ID da doação não encontrado.");
            return;
        }

        try {
            // 1. A chamada para a API continua a mesma
            await axios.put(`http://localhost:8080/api/donations/${props.id}/approve`, {}, {
                withCredentials: true
            });

            // 2. Lógica de sucesso: Avisa o usuário e redireciona para o dashboard
            alert("Doação aprovada com sucesso!");
            navigate('/'); // Redireciona para a lista de doações pendentes

        } catch (err) {
            console.error(`Erro ao aprovar doação ${props.id}:`, err);
            alert("Não foi possível aprovar a doação. Tente novamente.");
        }
    };

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
                <button className={style.adopt} onClick={handleApproveClick}>Prosseguir para adoção</button>
                <button className={style.return} onClick={() => navigate ('/donationanimal')}>Retornar página anterior</button>
            </div>
        </div>
        </>  
    );
}

export default InformationDonationContainer;
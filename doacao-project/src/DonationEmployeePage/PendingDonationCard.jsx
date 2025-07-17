import style from './DonationEmployeePage.module.css';
import { useNavigate } from 'react-router-dom'

function PendingDonationCard(props) {
    const navigate = useNavigate();
    
    const handleApprove = () => {
        console.log(`Aprovar doação do animal: ${props.animalName}`);
    };

    return (
        <div className={style.pendingCard}> 
            <div className={style.cardHeader}>
                <h2 className={style.cardTitle}>{props.animalName.toUpperCase()}</h2>
                <span className={style.cardStatus}>- {props.status.toUpperCase()}</span>
            </div>
            
            <img 
                className={style.animalPic} 
                src={`http://localhost:8080${props.image}`} 
                alt={`Imagem do ${props.animalName}`}
            />
            
            <button className={style.approveButton} onClick={() => navigate (`/donationinformationanimal/${props.id}`)}>
                APROVAR
            </button>
        </div>
    );
}

export default PendingDonationCard;
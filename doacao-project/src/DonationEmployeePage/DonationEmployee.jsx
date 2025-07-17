import NavbarTop from '../Navbar/NavbarTop.jsx'
import style from './DonationEmployeePage.module.css';
import PendingDonationCard from './PendingDonationCard.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function DonationEmployee() {
    const navigate = useNavigate();
    const [pendingDonations, setPendingDonations] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8080/api/donations/pending", { 
            withCredentials: true 
        })
        .then((res) => setPendingDonations(res.data))
        .catch((err) => {
            console.error("Erro ao buscar doações pendentes", err);
            setError('Falha ao carregar dados. Verifique se está logado.');
        });
    }, []);

    return (
        <>
            <NavbarTop />
            <div className={style.dashboardContainer}>
                <main className={style.mainContent}>
                    {error && <p>{error}</p>}
                    <div className={style.cards}>
                        {pendingDonations.map((donation) => (
                            <PendingDonationCard 
                                key={donation.id}
                                id={donation.id} 
                                animalName={donation.animal.name} 
                                image={donation.animal.imagePath}
                                status={donation.status}
                            />
                        ))}
                    </div>
                    <div className={style.actionsContainer}>
                        <button className={style.registerAnimalButton} onClick={() => navigate('/animalsregister/')} >Cadastrar animal</button>
                        <button className={style.registerEmployeeButton} onClick={() => navigate('/employeeregister/')} >Cadastrar empregado</button>
                    </div>
                </main>
            </div>
        </>
    );
}

export default DonationEmployee;
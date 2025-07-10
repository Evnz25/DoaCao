import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InformationDonationContainer from './DonationInformationAnimalContainer'
import NavbarTop from '../Navbar/NavbarTop';

function DonationInformationAnimal() {
    const { id } = useParams();
    const [donations, setDonation] = useState(null);

    useEffect(() =>{
        axios.get(`http://localhost:8080/donations/${id}`)
        .then(res => setDonation(res.data))
        .catch(err => console.error("Erro em buscar doação (DonationAnimal)", err))
    }, [id]);

    if (!donations) {
        return (
            <>
                <NavbarTop />
                <p>Carregando informações da doação...</p>
            </>
        );
    }


    return(
        <>
            <NavbarTop />
            <InformationDonationContainer 
                key={donations.id}
                status={donations.status}
                specie={donations.animal.specie}
                Name={donations.animal.name}
                age={donations.animal.age}
                gender={donations.animal.gender}
                race={donations.animal.race}
                image={donations.animal.imagePath}      
                clientName={donations.client.name} 
                clientEmail={donations.client.email}
                clientCpf={donations.client.cpf}
                clientTelephone={donations.client.phone}
                clientAdrressState={donations.client.address.state} 
                clientAdrressCity={donations.client.address.city} 
                clientAdrressNeighborhood={donations.client.address.neighborhood} 
                clientAdrressStreet={donations.client.address.street} 
                clientAdrressNumber={donations.client.address.number} 
            />
        </>
    );
}

export default DonationInformationAnimal   
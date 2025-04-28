import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InformationAnimalContainer from './InformationAnimalContainer'
import NavbarTop from '../Navbar/NavbarTop';

function InformationDog() {
    const { id } = useParams();
    const [animals, setAnimal] = useState(null);

    useEffect(() =>{
        axios.get(`http://localhost:8080/animals/${id}`)
        .then(res => setAnimal(res.data))
        .catch(err => console.error("Erro em buscar animal (InformationAnimal)", err))
    }, [id]);

    if(!animals) {
        return <p>Carregando</p>
    }

    return(
        <>
            <NavbarTop />
            <InformationAnimalContainer 
                key={animals.id}
                name={animals.name} 
                age={animals.age} 
                gender={animals.gender} 
                specie={animals.specie}
                race={animals.race} 
                image={animals.imagePath} 
                injuries={animals.medical_conditions.injuries} 
                sickness={animals.medical_conditions.sickness} 
                medicine={animals.medical_conditions.medicine} 
                vaccine={animals.medical_conditions.vaccine}
                castrated={animals.medical_conditions.castrated}
            />
        </>
    );
}

export default InformationDog   
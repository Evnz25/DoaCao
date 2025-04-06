import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InformationDogContainer from '../Container/InformationDogContainer'
import NavbarTop from '../Navbar/NavbarTop';

function InformationDog() {
    const { id } = useParams();
    const [animals, setAnimal] = useState(null);

    useEffect(() =>{
        axios.get(`http://localhost:8080/animals/${id}`)
        .then(res => setAnimal(res.data))
        .catch(err => console.error("Erro em buscar animal (InformationDog)", err))
    }, [id]);

    if(!animals) {
        return <p>Carregando</p>
    }

    return(
        <>
            <NavbarTop />
            <InformationDogContainer key={animals.id} name={animals.name} age={animals.age} gender={animals.gender} specie={animals.specie}
            race={animals.race} image={animals.imagePath} />
        </>
    );
}

export default InformationDog   
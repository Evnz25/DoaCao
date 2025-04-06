import style from './Pages.module.css'
import NavbarTop from '../Navbar/NavbarTop.jsx'
import CardAnimal from '../Cards/CardAnimal.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'

function DonationDog() {
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/animals")
        .then((res) => setAnimals(res.data))
        .catch((err) => console.error("Erro", err));
    }, []);

    return(
        <>
            <NavbarTop />
            <div className={style.cards}>
                {animals.map((animals) => (
                    <>
                        <CardAnimal key={animals.id} id={animals.id} name={animals.name} image={animals.imagePath} />
                    </>
                ))}
            </div>
        </>
    )
}

export default DonationDog
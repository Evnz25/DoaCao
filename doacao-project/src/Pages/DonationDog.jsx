import style from './Pages.module.css'
import NavbarTop from '../Navbar/NavbarTop.jsx'
import CardAnimal from '../Cards/CardAnimal.jsx'
import NinaPic from '../assets/NinaPic.png'
import RexPic from '../assets/RexPic.png'
import BellaPic from '../assets/BellaPic.png'
import ZecaPic from '../assets/ZecaPic.png'
import MaxPic from '../assets/MaxPic.png'
import LunaPic from '../assets/LunaPic.png'
import { useEffect, useState } from 'react'

function DonationDog() {
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/animals")
        .then((res) => setAnimals(res.data))
        .catch((err) => console.error("Erro"), err);
    }, []);

    return(
        <>
            <NavbarTop />
            <div className={style.cards}>
                {animals.map((animals) => (
                    <>
                    <CardAnimal key={animals.id} nome={animals.nome} image={animals.imagePath} />
                    </>
                ))}
            </div>
        </>
    )
}

export default DonationDog
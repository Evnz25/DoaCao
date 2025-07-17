import { useNavigate } from 'react-router-dom'
import style from './HomePage.module.css'
import cachorroPicHome from '../assets/cachorro-home.png'
import gatoPicHome from '../assets/gato-home.png'

function ContainerHome() {
    const navigate = useNavigate()

    return(
        <div className={style.adocaoContainerHome}>
            <div className={style.adocaoCardLeft}>
                <img className={style.containerImgDog} src={cachorroPicHome} alt="dogs pictures"></img>
                <button className={style.adocaoButtonDog}  onClick={() => navigate ('/donationanimal')}>Adote um animal</button>
            </div>
        </div>
    )
}

export default ContainerHome;
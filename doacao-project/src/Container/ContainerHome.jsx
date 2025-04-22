import { useNavigate } from 'react-router-dom'
import style from './Container.module.css'
import cachorroPicHome from '../assets/cachorro-home.png'
import gatoPicHome from '../assets/gato-home.png'

function ContainerHome() {
    const navigate = useNavigate()

    return(
        <div className={style.adocaoContainerHome}>
            <div className={style.adocaoCardRight}>
                <img className={style.containerImgCat} src={gatoPicHome} alt="cats pictures"></img>
                <button className={style.adocaoButtonCat} onClick={() => navigate ('/animalsregister/')}>Adote um gato</button>
            </div>
            <div className={style.adocaoCardLeft}>
                <img className={style.containerImgDog} src={cachorroPicHome} alt="dogs pictures"></img>
                <button className={style.adocaoButtonDog}  onClick={() => navigate ('/donationdog')}>Adote um cachorro</button>
            </div>
        </div>
    )
}

export default ContainerHome;
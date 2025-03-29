import react from 'react';
import style from './Container.module.css'
import cachorroPicHome from '../assets/cachorro-home.png'
import gatoPicHome from '../assets/gato-home.png'

function ContainerHome() {
    return(
        <div className={style["adocao-container-home"]}>
            <div className={style["adocao-card-left"]}>
                <img className={style["container-img-dog"]} src={cachorroPicHome} alt="dogs pictures"></img>
                <button className={style["adocao-button-dog"]}>Adote um cachorro</button>
            </div>
            <div className={style["adocao-card-right"]}>
                <img className={style["container-img-cat"]} src={gatoPicHome} alt="cats pictures"></img>
                <button className={style["adocao-button-cat"]}>Adote um gato</button>
            </div>
        </div>
    )
}

export default ContainerHome;
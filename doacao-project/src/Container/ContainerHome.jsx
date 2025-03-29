import react from 'react';
import style from './Container.module.css'
import cachorroPicHome from '../assets/cachorro-home.png'

function ContainerHome() {
    return(
        <div className={style["adocao-container-left"]}>
            <div className={style["adocao-card-left"]}>
                <img className={style["container-img-dog"]} src={cachorroPicHome} alt="dogs pictures"></img>
                <button className={style["adocao-button-dog"]}>Adote um cachorro</button>
            </div>
        </div>
    )
}

export default ContainerHome;
import React from 'react'
import style from './Navbar.module.css'
import logopic from '../assets/logo-doacao.png'

function Navbar(){

    return(
        <nav className={style.navbarTop}>
            <div className={style["navbarTop-left"]}>
                <a href="/" className={style.logo}>
                    <img className={style["logo-img"]} src={logopic} alt="logo pictures"></img>
                </a>
            </div>

            <div className={style["navbarTop-right"]}>
                <ul className={style["nav-links"]}>
                        <li>
                            <a href="/">Gatos</a>
                        </li>
                        <li>
                            <a href="/">Cachorros</a>
                        </li>
                </ul>
                <button className={style["login-button"]}>Login funcionário</button>
            </div>
        </nav>
    )

}

export default Navbar
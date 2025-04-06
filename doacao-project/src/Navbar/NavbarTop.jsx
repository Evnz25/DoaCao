import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import style from './Navbar.module.css'
import logopic from '../assets/logo-doacao.png'

function Navbar(){
    const navigate = useNavigate();

    return(
        <nav className={style.navbarTop}>
            <div className={style.navbarTopLeft}>
                <a href="/" className={style.logo}>
                    <img className={style.logoImg} src={logopic} alt="logo pictures"></img>
                </a>
            </div>

            <div className={style.navbarTopRight}>
                <ul className={style.navLinks}>
                    <li><Link to="/"> Gatos </Link></li>
                    <li><Link to="/donationdog"> Cachorros </Link></li>
                </ul>
                <button className={style.loginButton} onClick={() => navigate('/')}>Login funcionário</button>
            </div>
        </nav>
    );

}

export default Navbar
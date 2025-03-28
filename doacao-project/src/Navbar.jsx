import React from 'react'
import logopic from './assets/logo-doacao.png'

function Navbar(){

    return(
        <nav className= "navbar">
            <div className= "navbar-left">
                <a href="/" className= "logo">
                    <img className="logo-img" src={logopic} alt="logo pictures"></img>
                </a>
            </div>

            <div className="navbar-right">
                <ul className="nav-links">
                        <li>
                            <a href="/">Gatos</a>
                        </li>
                        <li>
                            <a href="/">Cachorros</a>
                        </li>
                </ul>
                <button className="login-button">Login funcionário</button>
            </div>
        </nav>
    )

}

export default Navbar
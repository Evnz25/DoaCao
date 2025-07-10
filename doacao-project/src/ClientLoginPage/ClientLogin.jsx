import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavbarTop from "../Navbar/NavbarTop"

function ClientLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 

        try {
            const loginData = {
                email: email,
                password: password,
            };

            const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
            console.log('Login realizado com sucesso!', response.data);

            localStorage.setItem('employeeUser', JSON.stringify(response.data));

            navigate('/');

        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data);
            } else {
                setError('Não foi possível conectar ao servidor. Tente novamente mais tarde.');
            }
            console.error("Erro no login: ", err);
        }
    };

    return (
        <>
        <NavbarTop />
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
        </>
    );
}

export default ClientLogin;
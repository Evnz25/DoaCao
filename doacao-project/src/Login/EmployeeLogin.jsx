import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './EmployeeLogin.module.css'; 

function Login() {
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

            navigate('/donationemployee');

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
        <div className={style.loginContainer}>
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <h2>Login</h2>
                
                <div className={style.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className={style.errorMessage}>{error}</p>}

                <button type="submit" className={style.loginButton}>Login</button>
            </form>
        </div>
    );
}

export default Login;
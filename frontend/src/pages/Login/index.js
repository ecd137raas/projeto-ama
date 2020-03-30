import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';
import logoImg from '../../assets/logo_site.png';
import fitaImg from '../../assets/fitaAutism.png';


export default function Login() {
    const [email, setEmail] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try{
            
            const res = await api.post('sessions', {email});
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('email', email);
            localStorage.setItem('nome', res.data.nome);
            localStorage.setItem('especialidade', res.data.especialidade);
            console.log(res);
            
        }catch(err) {
            alert('Falha na autenticação, tente novamente.');
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="AMA" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input type='email' placeholder="Informe seu e-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        Não possui cadastro, clique aqui.
                    </Link>
                </form>
            </section>
            <img src={ fitaImg } alt="Fita Ama" />
        </div>

    )


}
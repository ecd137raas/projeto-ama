import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';
import logoImg from '../../assets/logo_site.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try{
            
            const res = await api.post('sessions', {email});
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('email', email);
            localStorage.setItem('name', res.data.name);
            localStorage.setItem('specialty', res.data.specialty);
            history.push('/home');
            
        }catch(err) {
            alert('Falha na autenticação, tente novamente.');
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="AMA" />
                <form onSubmit={handleLogin}>
                    <input type='email' placeholder="Informe o email para logon" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <button className="button" type="submit">Entrar</button>
                </form>
            </section>
        </div>

    )


}
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';
import './style.css';
import logoImg from '../../assets/logo_site.png';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Signin() {
    const [email, setEmail] = useState('');
    const history = useHistory();

    async function handleSignin(e) {
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
        
        <div className='signin-container' >
            <section className='container'>
                <img src={ logoImg } alt="AMA" />
                <form onSubmit={handleSignin}>
                    <TextField
                        id="filled-password-input"
                        label="Informe o e-mail"
                        type="email"
                        value={email} onChange={e => setEmail(e.target.value)} required
                    />
                    <Button type="submit">
                        Entrar
                    </Button>
                    </form>
            </section>
        </div>

    )


}
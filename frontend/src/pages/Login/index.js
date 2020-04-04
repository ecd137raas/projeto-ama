import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Image, Form, Container, Row} from 'react-bootstrap';
import api from '../../services/api';

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
            localStorage.setItem('role', res.data.role);
            history.push('/home');
            
        }catch(err) {
            alert('Falha na autenticação, tente novamente.');
        }
    }
    return(
        <div class="d-flex justify-content-center">
            <Form onSubmit={handleLogin}>
                <Form.Group>
                    <Image width={350} src={logoImg} fluid />
                    <Form.Control type="email" placeholder="Informe o e-mail para logon" value={email} onChange={e => setEmail(e.target.value)} required />
                    <Form.Text className="text-muted">
                        Nunca compartilhe seu e-mail com ninguém.
                    </Form.Text>
                    <Button bsStyle='Primary' width='100%' type="submit">Entrar</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
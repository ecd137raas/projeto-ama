import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Image, Form, FormGroup} from 'react-bootstrap';
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
        <div className='container'>
            <div className="justify-content-center align-items-center row">
                <div className="col-md-4 align-self-center mt-5">
                    <Form onSubmit={handleLogin}>
                        <Form.Group>
                            <Image src={logoImg} thumbnail/>
                        </Form.Group>
                        <FormGroup>    
                            <Form.Control type="email" size="md" placeholder="E-Mail" value={email} onChange={e => setEmail(e.target.value)} required />
                            <Form.Text className="text-muted"> Nunca compartilhe seu e-mail com ninguém.</Form.Text>
                        </FormGroup>
                        <Button className='Primary' type="submit" size="md" block>Entrar</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
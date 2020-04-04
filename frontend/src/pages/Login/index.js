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
        <div class='container'>
            <div class="justify-content-center align-items-center row">
                <div class="col-md-4 align-self-center text-center mt-5">
                    <Form onSubmit={handleLogin}>
                        <Form.Group>
                            <Image src={logoImg} width={350}/>
                        </Form.Group>
                        <FormGroup>    
                            <Form.Control type="email" size="md" placeholder="Informe o e-mail para logon" value={email} onChange={e => setEmail(e.target.value)} required />
                            <Form.Text className="text-muted"> Nunca compartilhe seu e-mail com ninguém.</Form.Text>
                        </FormGroup>
                        <Button bsStyle='Primary' width='100%' type="submit" size="lg" block>Entrar</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
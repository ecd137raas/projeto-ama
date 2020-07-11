import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Card,Container, Form, Button, Col} from 'react-bootstrap';

import Header from '../Header';

import api from '../../services/api';

export default function Employee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [therapist, setTherapist] = useState('');
    const [active, setActive] = useState('');
    const history = useHistory();

    async function handleEmployee(e){
        e.preventDefault();
        const data = {name, email, role, city, uf, therapist, active};
        try{
            await api.post('employee', data);
            history.push('/home')
        } catch(error) {
            alert('Erro ao cadastrar um profissional, tente novamente.');
        }
    }

    return(
        <Container>
            <Header />
            <Card className='card' style={{marginTop: '30px'}}>
                <Card.Header className='card-header'>Cadastro de profissionais do AMA</Card.Header>
                <Card.Body style={{class:'card-body'},{ margin: '12px'}}>
                <Card.Title>
                    <h6 className="card-subtitle mb-2 text-muted">Preencha os campos abaixo para realizar o cadastro de um profissional do AMA, lembre-se de preencher corretamente!</h6>
                </Card.Title>
                    <Form  onSubmit={handleEmployee}>
                        <Form.Row style={{marginTop:'10px'}}>
                            <Col>
                                <Form.Control type="text" placeholder="Nome completo"value={name} onChange={e => setName(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha o nome completo do profissional.</Form.Text>
                            </Col>
                            <Col>
                                <Form.Control type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha seu e-mail.</Form.Text>
                            </Col>
                            </Form.Row>
                            <Form.Row style={{marginTop:'10px'}}>
                            <Col>
                                <Form.Control className="form-control" type="text" placeholder="Especialidade ou cargo" value={role} onChange={e => setRole(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha sua especialidade, exemplo, Terapeuta.</Form.Text>
                            </Col>
                            </Form.Row>
                            <Form.Row style={{marginTop:'10px'}}>
                                <Col>
                                    <Form.Control className="form-control" type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} required/>
                                    <Form.Text className="text-muted"> Preencha a cidade, exemplo, São Paulo.</Form.Text>
                                </Col>
                                <Col>
                                    <Form.Control  className="form-control" type="text" placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} required/>
                                    <Form.Text className="text-muted"> Preencha seu estado, exemplo, SP.</Form.Text>
                                </Col>
                                <Col>
                                    <Form.Check  type="switch" label="Terapeuta" id="custom-switch" checked={therapist} onChange={e => setTherapist(e.target.value)} />
                                    <Form.Text className="text-muted"> Ative se o profissional for um terapeuta.</Form.Text>
                                </Col>
                                <Col>
                                    <Form.Check type="switch" label="Ativo" id="custom-switch-2" checked={active} onChange={e => setActive(e.target.value)}/>
                                    <Form.Text className="text-muted"> Ativar o usuário.</Form.Text>
                                </Col>
                           </Form.Row>
                           <Button className="btn btn-primary btn-md mt-3" type="submit">Salvar</Button>
                           <Button className="btn btn-primary btn-md mt-3 ml-2" type="submit" href="/home">Voltar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
    
}
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Card,Container, Form, Button, Col} from 'react-bootstrap';

import {FiArrowLeft} from 'react-icons/fi';
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
            const res = await api.post('employee', data);
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
                    <h6 class="card-subtitle mb-2 text-muted">Preencha os campos abaixo para realizar o cadastro de um profissional do AMA, lembre-se de preenche corretamente!</h6>
                </Card.Title>
                    <Form  onSubmit={handleEmployee}>
                        <Form.Row>
                            <Col>
                                <Form.Control type="text" placeholder="Nome completo"value={name} onChange={e => setName(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha o nome completo do profissional.</Form.Text>
                            </Col>
                            <Col>
                                <Form.Control type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha seu e-mail.</Form.Text>
                            </Col>
                            </Form.Row>
                            <Form.Row>
                            <Col>
                                <Form.Control class="form-control" type="text" placeholder="Especialidade ou cargo" value={role} onChange={e => setRole(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha sua especialidade, exemplo, Terapeuta.</Form.Text>
                            </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Control class="form-control" type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} required/>
                                    <Form.Text className="text-muted"> Preencha a cidade, exemplo, São Paulo.</Form.Text>
                                </Col>
                                <Col>
                                    <Form.Control  class="form-control" type="text" placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} required/>
                                    <Form.Text className="text-muted"> Preencha seu estado, exemplo, SP.</Form.Text>
                                </Col>
                                <Col>
                                    <Form.Check class="form-control" type="checkbox" label="Terapeuta" checked={therapist} onChange={e => setTherapist(e.target.value)} />
                                    <Form.Text className="text-muted"> Assinale se o profissional for um terapeuta.</Form.Text>
                                </Col>
                                <Col>
                                    <Form.Check type="checkbox" label="Ativo"  checked={active} onChange={e => setActive(e.target.value)}/>
                                    <Form.Text className="text-muted"> Assinale para ativar o usuário.</Form.Text>
                                </Col>
                           </Form.Row>
                           <Button className="btn btn-primary btn-md mt-3" type="submit">Salvar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
    
}
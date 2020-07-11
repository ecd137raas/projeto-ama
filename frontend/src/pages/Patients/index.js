import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Card,Container, Form, Button, Col} from 'react-bootstrap';

import Header from '../Header';

import api from '../../services/api';

export default function Patients() {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [genre, setGenre] = useState('');
    const [degree, setDegree] = useState('');
    const [responsible, setResponsible] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [active, setActive] = useState('');
    const history = useHistory();

    async function handlePatients(e){
        e.preventDefault();
        const data = {name, birth, genre, degree, responsible, email, phone,city, uf, active};
        try{
            await api.post('patients', data);
            history.push('/home');
        } catch(error) {
            alert('Erro ao cadastrar uma criança, tente novamente.');
        }
    }

    return(
        <Container>
            <Header />
            <Card className='card' style={{marginTop: '30px'}}>
                <Card.Header className='card-header'>Cadastro de crianças atendidas no AMA</Card.Header>
                <Card.Body style={{class:'card-body'},{ margin: '12px'}}>
                <Card.Title>
                    <h6 className="card-subtitle mb-2 text-muted">Preencha os campos abaixo para realizar o cadastro de uma criança para atendimento no AMA!</h6>
                </Card.Title>
                    <Form  onSubmit={handlePatients}>
                        <Form.Row>
                            <Col>
                                <Form.Control type="text" placeholder="Nome completo"value={name} onChange={e => setName(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha o nome completo.</Form.Text>
                            </Col>
                        </Form.Row>
                        <Form.Row style={{marginTop:'10px'}}>
                            <Col>
                                <Form.Control className="form-control" type="Date" value={birth} onChange={e => setBirth(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha data de nascimento.</Form.Text>
                            </Col>
                            <Col>
                                <Form.Control as="select" value={genre} onChange={e => setGenre(e.target.value)}>
                                    <option value='Menino'>Menino</option>
                                    <option value='Menina'>Menina</option>
                                </Form.Control>
                                <Form.Text className="text-muted"> Selecione o genêro, menino ou menina.</Form.Text>
                            </Col>
                            <Col>
                                <Form.Control as="select" value={degree} onChange={e => setDegree(e.target.value)}>
                                    <option value='Indefinido'>Indefinido</option>
                                    <option value='Leve'>Leve</option>
                                    <option value='Moderado'>Moderado</option>
                                    <option value='Severo'>Severo</option>
                                </Form.Control>
                                <Form.Text className="text-muted"> Selecione o grau do altismo.</Form.Text>
                            </Col>
                        </Form.Row>
                        <Form.Row style={{marginTop:'10px'}}>
                            <Col>
                                <Form.Control className="form-control" type="text" placeholder="Nome do responsável" value={responsible} onChange={e => setResponsible(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha a responsável.</Form.Text>
                            </Col>
                            <Col>
                                <Form.Control  className="form-control" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha o e-mail do responsável.</Form.Text>
                            </Col>
                        </Form.Row>
                        <Form.Row style={{marginTop:'10px'}}>
                            <Col>
                                <Form.Control  className="form-control" data-mask="(00) 00000-0000" type="text" placeholder="Celular (whatsapp)" value={phone} onChange={e => setPhone(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha o celular do responsável.</Form.Text>
                            </Col>
                            <Col>
                                <Form.Control  className="form-control" type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha a cidade.</Form.Text>
                            </Col>
                            <Col>
                                <Form.Control  className="form-control" type="text" placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} required/>
                                <Form.Text className="text-muted"> Preencha o estado.</Form.Text>
                            </Col>
                            <Col>
                                <Form.Check type="switch" label="Ativo" id="custom-switch" checked={active} onChange={e => setActive(e.target.value)}/>
                                <Form.Text className="text-muted"> Ativar o cadastro.</Form.Text>
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
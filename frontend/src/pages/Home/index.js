import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import Header from '../Header';


export default function Home(){
    
    return (
        <Container>
            <Header />
            <Jumbotron style={{marginTop:'20px'}}>
                <h1>Olá seja bem vindo!</h1>
                <p>
                    Esse é o sistema de controle de frenquências e agendamentos das crianças do AMA.
                </p>
            </Jumbotron>
        </Container>
    )
}
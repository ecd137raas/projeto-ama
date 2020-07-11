import React, {useState, FormData} from 'react';
import {Card,Container, Form, Button, Col, FormLabel} from 'react-bootstrap';
import Headers from '../Header';
import api from '../../services/api';

export default function Schedulle(){
    const [employee, setEmployee] = useState([]);
    const [patients, setPatients] = useState([]);
    
    async function handleEmployee(){
            await api.get('employee').then(employee => {
            setEmployee(employee.data);
        })
    }
    
return(
    <Container>
        <Headers />
        <Form>
           
        </Form>
    </Container>
   
       
)

}

import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import Header from '../Header';

import api from '../../services/api';
import './style.css';


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
            history.push('/')
        } catch(error) {
            alert('Erro ao cadastrar um profissional, tente novamente.');
        }
    }

    return(
        <div>
            <Header />
            <div className="employee-container">
                <div className="content">
                    <section> 
                        <h1>Cadastrar profissional do AMA</h1>
                        <p>Informe os campos obrigatórios para cadastro do profissional, não esqueça de marcar se este é um terapeuta e se está ativo!</p>
                        <Link className="back-link" to="/home">
                            <FiArrowLeft size={16} color="#E02041" />
                            Voltar para home
                        </Link>
                    </section>
                    <form onSubmit={handleEmployee}>
                        <input placeholder="Nome completo" value={name} onChange={e => setName(e.target.value)} required/>
                        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                        <input placeholder="Especialidade" value={role} onChange={e => setRole(e.target.value)} required />
                        <table >
                            <tr >
                                <td ><input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} required/> </td>
                                <td> <input placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} required/> </td>
                            </tr>
                            <tr >
                                <label>
                                    Terapeuta:
                                    <select value={therapist} onChange={e => setTherapist(e.target.value)} required> 
                                        <option></option>
                                        <option value="S" >Sim</option>
                                        <option value="N" >Não</option>
                                    </select>
                                </label>
                                <label>    Ativo:</label>
                                <select value={active} onChange={e => setActive(e.target.value)} required>
                                    <option ></option>
                                    <option value="S">Sim</option>
                                    <option value="N">Não</option>
                                </select>
                            </tr>
                        </table>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
    
}
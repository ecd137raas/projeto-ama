import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import Header from '../Header';

import api from '../../services/api';
import './style.css';


export default function Employee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function handleEmployee(){

        try{
            //const res = await api.post('employee')

        } catch(error) {

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
                        <Link className="back-link" to="/profile">
                            <FiArrowLeft size={16} color="#E02041" />
                            Voltar para home
                        </Link>
                    </section>
                    <form >
                        <input placeholder="Nome completo"  required/>
                        <input type="email" placeholder="E-mail" required />
                        <input placeholder="Especialidade" required />
                        <table >
                            <tr >
                                <td ><input placeholder="Cidade" required/> </td>
                                <td> <input placeholder="UF" required/> </td>
                            </tr>
                            <tr >
                                <label>Terapeuta:</label>
                                <select>
                                    <option value="S">Sim</option>
                                    <option value="N" selected>Não</option>
                                </select>
                                <label>    Ativo:</label>
                                <select >
                                    <option value="S" selected>Sim</option>
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
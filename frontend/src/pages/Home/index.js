import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';


import Header from '../Header';

import userImg from '../../assets/users.svg'
import icoImg from '../../assets/icoImg.svg'
import calendar from '../../assets/calendar.svg'
import './style.css';

export default function Home(){
    
    return (
        <div className="home-container">
            <Header />
            <Box component="span" m={1}>
                <ul>
                    <Link className="link"  to="/employee">
                        <img src={userImg} alt="Cadastro profissionais" />
                        <p align="center">Profissionais AMA</p>
                    </Link>
                    <Link className="link" >
                        <img src={icoImg} alt="Cadastro criancas" />
                        <p align="center">Crianças AMA</p>
                    </Link>
                    <Link className="link" >
                        <img src={calendar} alt="Cadastro agendas" />
                        Agendamentos
                    </Link> 
                </ul>
            </Box>
        </div>
        
    )
}
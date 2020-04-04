import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logotopoImg from '../../assets/logo_topo.png';
import './style.css';

export default function Home(){
    const history = useHistory();
    const name = localStorage.getItem('name');
    const role = localStorage.getItem('role');
  
    function handleLogout() {
        localStorage.clear();
        history.push("/");
    }

    return (
        <div className="header-container">
            <header>
                <img src={logotopoImg} alt="AMA" />
                <span>Olá {name}! <p> {role} </p></span>
                <button  onClick={handleLogout} type="button">
                    <FiLogIn size={24} color="#6699F6" />
                </button>
            </header>
        </div>
    )
}
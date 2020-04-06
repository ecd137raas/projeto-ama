import React from 'react';
import {FiUnlock, FiPower} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import {Navbar, 
        NavDropdown,
        Nav, Form, NavbarBrand} from 'react-bootstrap';

import logotopoImg from '../../assets/logo_topo.png';


export default function Home(){
    const history = useHistory();
    const name = localStorage.getItem('name');
    const role = localStorage.getItem('role');
  
    function handleLogout() {
        localStorage.clear();
        history.push("/");
    }

    return (
            <Navbar expand="lg" bg="light" variant="light" >
                <NavbarBrand>
                    <img src={logotopoImg} width="30" height="30" className="d-inline-block align-top" />
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" active>AMA Jundiaí</Nav.Link>
                        <NavDropdown title="Opções" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/employee">Profissionais AMA</NavDropdown.Item>
                            <NavDropdown.Item href="/patients">Crianças AMA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Agendamento</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <a><FiUnlock size={15} color="#008000" ></FiUnlock></a>  <a className="text-muted small">{name}</a> | <a> <FiPower size={18} color="#f21e1e" onClick={handleLogout}></FiPower></a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    )
}
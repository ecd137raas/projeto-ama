import React from 'react';
import { useHistory } from 'react-router-dom';
import {Image,  
        Navbar, 
        NavDropdown,
        Container, 
        Nav, Form} from 'react-bootstrap';
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
        <Container>
            <Navbar expand="lg" bg="light" variant="light" >
                <Image src={logotopoImg} width={30} alt="AMA" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" active>AMA Jundiaí</Nav.Link>
                        <NavDropdown title="Opções" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/employee">Profissionais AMA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Crianças AMA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Agendamento</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Login: <a className="font-weight-bold">{name}</a><a className="text-primary" href="#" onClick={handleLogout}> Sair</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}
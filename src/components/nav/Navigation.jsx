import React from 'react'
import './Navigation.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {

  return (
    <nav className="sticky-top">
      <Navbar bg="white" data-bs-theme="white" className='nav-content container-fluid'>
        <div className='container'>
          <Navbar.Brand href="#home" className='nav-name'>Jisun's Portfolio</Navbar.Brand>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
              <Nav.Link href="#skill">Skill</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
          <div className='nav-btns'>
            <a href="https://www.linkedin.com/in/jisunbella/" target="_blank" className='btn nav-btn'><BsLinkedin /></a>
            <a href="https://github.com/jisunbella" target="_blank" className='btn nav-btn'><BsGithub /></a>
          </div>
        </div>
      </Navbar>
    </nav>
  );
}

export default Navigation;
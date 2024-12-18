import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { baseHome } from '../../environments'

function NavBar(props) {



    return (
        <>
            <div className="back container-fluid" >
                <Navbar className=" nav d-flex justify-content-around back container-fluid" >

                    <Nav.Link className="nav-hover"><Link to="/category/novidade">  Novidades</Link></Nav.Link>
                    <Nav.Link className="nav-hover"><Link to="/plansVed">   Planos </Link> </Nav.Link>
                    <NavDropdown title="Categorias" className="nav-hover"  style={{ zIndex: 1050 }} >
                        <NavDropdown.Item style={{ zIndex: 1050 }}  > <Link to="/category/1"> <p className="font"> Frutas </p> </Link> </NavDropdown.Item>
                        <NavDropdown.Item style={{ zIndex: 1050 }} > <Link to="/category/2"> <p className="font">  Salgados  </p> </Link> </NavDropdown.Item>
                        <NavDropdown.Item style={{ zIndex: 1050 }}> <Link to="/category/3"> <p className="font"> Doces </p> </Link> </NavDropdown.Item>
                        <NavDropdown.Item  style={{ zIndex: 1050 }}> <Link to="/category/4"> <p className="font"> Cafes </p> </Link> </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/aboutUS" className="nav-hover">Sobre Nós</Nav.Link>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar
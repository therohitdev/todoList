import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
export default function NavLink() {
  const [user, setUser] = useState({});

  useEffect(()=>{
    let userData = window.localStorage.getItem("userData");
    if(userData) {
      setUser(JSON.parse(userData));
    }
  }, [])


  function userLOgout(){
    window.localStorage.removeItem("userData");
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Shivani Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {
                Boolean(user.id) === true ? <Link to="#" onClick={() => userLOgout()} >Logout</Link> : <Link to="/">Login</Link>
              }
            </Nav.Link>
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/codes">Codes</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

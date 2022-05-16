import React, { useContext } from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function HeaderComponent() {
    const navigate = useNavigate();
    const userState = useContext(UserContext);
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Link className='li~nk' to="/">Navbar scroll</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className={({isActive}) => isActive ? 'active link': 'link'} to="/">Home</NavLink>
                        <NavLink className='link' to="/menu">Menu</NavLink>
                        <NavLink style={({isActive}) => isActive? {color: 'yellow'} : {}} className='link' to="/orders">Order</NavLink>
                        
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        {
                            userState.loginState.isLoggedin 
                                ? <Button onClick={() => { userState.logout(); navigate('/login')}} variant="outline-primary">Logout</Button>
                                : <Button onClick={() => {navigate('/login')}} variant="outline-primary">Login</Button>
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderComponent
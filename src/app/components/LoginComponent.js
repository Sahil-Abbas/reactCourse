import React, { useContext, useEffect, useRef } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function LoginComponent() {

    const emailRef = useRef(null);
    const userState = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        emailRef.current.focus();
        console.log(userState);
    }, [])
    

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
        userState.login();
        // console.log(userState);

        navigate('/menu');
    }
    return (
        <Container>
            <Row>
                <Col sm={3}>
                </Col>
                <Col sm={6}>
                    <Form onSubmit={formSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginComponent
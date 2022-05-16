import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import OrderDetail from './OrderDetail'

function OrderComponent() {
  return (
    <div>
      <Container>
        <Row>

          <Col sm={8}>
            <h1>Order3</h1>
            <Link to='3'>some description</Link>
            <h1>Order4</h1>
            <Link to='4'>some description</Link>
            <h1>Order5</h1>
            <Link to='5'>some description</Link>
          </Col>
          
          <Col sm={4}>
            <Outlet />
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default OrderComponent
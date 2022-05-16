import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const OrderDetail = () => {
    const params = useParams();
    const searchParams = useSearchParams();
  return (
    <div style={{backgroundColor: 'grey'}}>
        <h1>Order {params.id}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sit fugiat facere a, neque nobis velit sequi sunt. Suscipit corporis veniam ratione obcaecati perspiciatis quaerat aliquam ut debitis quis neque?</p>
        <small>price: $4</small>
    </div>
  )
}

export default OrderDetail
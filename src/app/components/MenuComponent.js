import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom'

const MenuComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            MenuComponent

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrAf1Yfdj--EQPorW7wZKtjRzltXR98yNSQ&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    {
                        searchParams.get('discount') && <Card.Text>
                        Discount: {searchParams.get('discount')}
                    </Card.Text>
                    }
                    <Card.Text>
                        {
                            searchParams.get('discount')
                                ? <>
                                    Price: <del>{searchParams.get('discount')}</del> {10 - (10 * searchParams.get('discount') / 100)}$
                                </>
                                : <>
                                    Price: 10$
                                </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Link to="2">Card Link</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MenuComponent
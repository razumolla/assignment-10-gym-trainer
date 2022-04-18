import React from 'react';
import { Button, Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bumble from '../../../../images/dumble.jpg'
const ConfirmFrom = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center text-primary'> PRICING </h2>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='rounded-pill' src={bumble} />
                <Card.Body>
                    <Card.Title>6 Month</Card.Title>
                    <Card.Title>$30/Mo </Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Free Riding</ListGroupItem>
                    <ListGroupItem>Unlimited Equipments</ListGroupItem>
                    <ListGroupItem>Personal Trainer</ListGroupItem>
                    <ListGroupItem>Weight Losing Classes</ListGroupItem>
                    <ListGroupItem>Month To Mouth</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to="/checkout" href="#">Join Now</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ConfirmFrom;
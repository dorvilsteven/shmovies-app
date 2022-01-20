import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = (props) => {
    const {
        title,
        director, 
        category
    } = props
    return (
    <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
            <Card.Title><div>{title}</div></Card.Title>
            <Card.Text><div>{director}</div></Card.Text>
            <Card.Text><div>{category}</div></Card.Text>
        </Card.Body>
        <Card.Body style={{ margin: 'auto'}}>
            <a href="/movie">
                <Button variant="primary">Reactions</Button>
            </a>
        </Card.Body>
    </Card>
    );
};

export default MovieCard;
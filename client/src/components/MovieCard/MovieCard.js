import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = () => {
    return (
    <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
            <Card.Title><div>Movie Title</div></Card.Title>
            <Card.Text><div>Director</div></Card.Text>
            <Card.Text><div>Category</div></Card.Text>
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
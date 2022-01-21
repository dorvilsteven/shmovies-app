import React, { useState } from "react";
// import { useQuery } from "@apollo/client";
// import { QUERY_MOVIE } from '../utils/queries';
import MovieCard from "../components/MovieCard/MovieCard";
import ReactionCard from "../components/ReactionCard/ReactionCard";
import { Form, Button, Alert } from "react-bootstrap";

const Movie = (props) => {
    const {
        movieId
    } = props
    // const { loading, data } = useQuery(QUERY_MOVIE);
    return (
        <div 
            className="single-movie-container"
            style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-around"
            }}>
            <div
                style={{
                    border: "1px solid #292B2C"
                }}
            >
                    See Movie Here!
                    <MovieCard />
            </div>
            <div 
                className="comment-section"
            >
                <h3>Reactions</h3>
                <Form
                    style={{
                    border: "1px solid #292B2C",
                    padding: "1em",
                    width: "100%",
                    margin: "auto",
                    }}
                    // onSubmit={handleFormSubmit}
                >
                    {/* comment input */}
                    <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Reactions Here"
                        name="reactionText"
                        required
                    />
                    </Form.Group>
                    <Button
                        type="submit"
                        variant="success"
                        style={{
                        margin: "auto",
                        }}
                    >
                        Post Reaction
                    </Button>
                </Form>
                {/* {Reactions} */}
                <ReactionCard />
                <ReactionCard />
                <ReactionCard />
            </div>
        </div>
    );
}

export default Movie;
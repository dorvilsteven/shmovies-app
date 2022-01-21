import React from "react";
import { Card, Button } from "react-bootstrap";

const ReactionCard = (props) => {
    const {
        reactionBody,
        username
    } = props
    return (
        <div
            style={{
                width: "100%",
                backgroundColor: "#cccccc"
            }}
        >
            <div>
                <p>text goes here{reactionBody}</p>
            </div>
            <div>
                <h6>-username{username}</h6>
            </div>
        </div>
    );
};

export default ReactionCard;
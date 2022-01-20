import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MOVIE } from "../utils/mutations";
import { Form, Button, Alert } from "react-bootstrap";
const MovieForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    director: "",
    category: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addMovie] = useMutation(ADD_MOVIE);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addMovie({
        variables: { ...formState },
      });
      console.log(data)
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }
    console.log(formState);
    // clear form values
    setFormState({
      title: "",
      director: "",
      category: "",
    });
  };
  return (
    <>
      <Form
        noValidate
        validated={validated}
        style={{
          border: "1px solid #292B2C",
          padding: "1em",
          width: "50%",
          margin: "auto",
        }}
        onSubmit={handleFormSubmit}
      >
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Movie not added, please try again.
        </Alert>
        {/* title input */}
        <Form.Group>
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={formState.title}
            required
          />
        </Form.Group>
        {/* director input */}
        <Form.Group>
          <Form.Label htmlFor="email">Director</Form.Label>
          <Form.Control
            type="text"
            placeholder="Director"
            name="director"
            onChange={handleChange}
            value={formState.director}
            required
          />
        </Form.Group>
        {/* category input */}
        <Form.Group>
          <Form.Label htmlFor="password">Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Category"
            name="category"
            onChange={handleChange}
            value={formState.category}
            required
          />
        </Form.Group>
          <Button
            disabled={
              !(formState.title && formState.director && formState.category)
            }
            type="submit"
            variant="success"
            style={{
              margin: "auto",
            }}
          >
            Post Movie
          </Button>
      </Form>
    </>
  );
};

export default MovieForm;
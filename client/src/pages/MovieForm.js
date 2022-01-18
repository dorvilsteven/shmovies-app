import React, { useState } from "react";
// import { useMutation } from '@apollo/client';
// import { ADD_MOVIE } from '../utils/mutations';
import { Form, Button, Alert } from "react-bootstrap";
// import Auth from '../utils/auth';

const MovieForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    director: "",
    cetegory: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  // const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      // const { data } = await addMovie({
      //   variables: { ...formState },
      // });
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }
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
          border: '1px solid #292b2c',
          padding: '1em',
          width: '50%',
          margin: 'auto'
        }} 
        onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >issue with login</Alert>
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
          {/* <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback> */}
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
          {/* <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback> */}
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
          {/* <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback> */}
        </Form.Group>
        <Button
          disabled={
            !(formState.title && 
              formState.director && 
              formState.category)
          }
          type="submit"
          variant="success"
        >
          Post Movie
        </Button>
      </Form>
    </>
  );
};

export default MovieForm;
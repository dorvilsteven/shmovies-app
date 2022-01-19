import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_MOVIE } from '../utils/mutations';
import { QUERY_ME, QUERY_MOVIES } from "../utils/queries";
import { Form, Button, Alert } from "react-bootstrap";

const MovieForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    director: "",
    category: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addMovie, { error }] = useMutation(ADD_MOVIE, {
    update(cache, { data: { addMovie } }) {
      try {
        const { movies } = cache.readQuery({ query: QUERY_MOVIES });
        cache.writeQuery({
          query: QUERY_MOVIES,
          data: { movies: [addMovie, ...movies] }
        });
      } catch(e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, movies: [...me.movies, addMovie] } }
      });
    }
  });

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
      await addMovie({
        variables: { ...formState },
      });
      // clear form values
      setFormState({
        title: "",
        director: "",
        category: "",
      });
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }
  };
  console.log(formState);
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
        >Movie not added, please try again.</Alert>
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
        <Form.Group
          style={{
            display: 'flex'    
          }}
        >
          <Button
            disabled={
              !(formState.title && formState.director && formState.category)
            }
            type="submit"
            variant="success"
            style={{
              margin: 'auto'    
            }}
          >
            Post Movie
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default MovieForm;
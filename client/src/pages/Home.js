import React from "react";
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
import { Container, Dropdown, DropdownButton } from "react-bootstrap";

// import Auth from '../utils/auth';

const Home = () => {
  return (
    <>
      <Container>
        <h1>SHMOVIES</h1>
        <DropdownButton id="dropdown-basic-button" title="Categories">
          <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Cateogry 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
        </DropdownButton>
      </Container>

      {/* The movies will be mapped below */}
      <Container></Container>
    </>
  );
};

export default Home;

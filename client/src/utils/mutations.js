import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($thoughtId: ID!, $reactionBody: String!) {
    addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($id: ID!) {
    addMovie(movieId: $id) {
      _id
      username
      MovieCount
      movies {
        _id
        username
      }
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation removeMovie($id: ID!) {
    removeMovie(id: $id) {
      _id
      username
      movies {
        _id
        username
      }
    }
  }
`;
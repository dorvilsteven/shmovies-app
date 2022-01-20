import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($title: String!, $director: String!, $category: String!) {
    addMovie(title: $title, director: $director, category: $category) {
      _id
      title
      director
      category
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($reactionBody: String!, $username: String!) {
    addReaction(reactionBody: $reactionBody, username: $username) {
      _id
      reactions {
        _id
        reactionBody
        username
      }
    }
  }
`;

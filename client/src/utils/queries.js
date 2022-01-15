import { gql } from "@apollo/client";

export const QUERY_MOVIES = gql`
  query movies($username: String) {
    movies(username: $username) {
      _id
      title
      director
      category
      reactions {
        _id
        reactionBody
        username
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      save_movies {
        _id
        title
        director
        category
        reactions
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      save_movies {
        _id
        title
        director
        category
        reactions
      }
    }
  }
`;

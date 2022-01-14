const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    username: String!
    movies: [Movie]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
  }

  type Movie {
      _id: ID
      title: String!
      director: String!
      category: String!
      image: String!
      reactions: [Reaction]
  }

  type Reaction {
      _id: ID
      reactionBody: String!
      username: String!
  }
`;

module.exports = typeDefs;
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    save_movies: [Movie]
  }

  type Movie {
    _id: ID
    title: String
    director: String
    category: String
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input MovieInput{
    title: String
    director: String
    category: String
    reactions: [String]
  }

  type Query {
    me: User
    users: [User]
    movies(_id: ID!): [Movie]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addMovie(movieData: MovieInput!): User
    addReaction(movieId: ID!, reactionBody: String!): Movie
  }
`;
module.exports = typeDefs;

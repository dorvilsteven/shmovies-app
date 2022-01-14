const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    rented_movies: [String]
    save_movies:[Movie]
  }

  type Movie {
    _id: ID
    titile: String
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

  type Query {
    me: User
    users: [User]
  }
  
  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addMovie(
      titile: String
      director: String
      category: String
      reaction: [Reaction]
    ): User
    addReaction(movieId: ID!, reactionBody: String!): Movie
  }
`;
module.exports = typeDefs;

const { login, me } = require('../apis/auth');
const resolvers = {
  Query: {
    me
  },
  Mutation: {
    login
  }
};
module.exports = resolvers;
const { AuthenticationError } = require("apollo-server-express");
const { User, Movie } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("save_movies");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password").populate("save_movies");
    },
    movies: async (parent, { _id }) => {
      return Movie.findOne({ _id });
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);

    return { token, user };
  },

  addMovie: async (parent, args, context) => {
    if (context.user) {
      const movies = await Movie.create({
        ...args,
        username: context.user.username,
      });

      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { save_movies: movies._id } },
        { new: true }
      );

      return movies;
    }

    throw new AuthenticationError("You need to be logged in!");
  },

  addReaction: async (parent, { movieId, reactionBody }, context) => {
    if (context.user) {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $push: {
            reactions: { reactionBody, username: context.user.username },
          },
        },
        { new: true, runValidators: true }
      );

      return updatedThought;
    }

    throw new AuthenticationError("You need to be logged in!");
  },
};

module.exports = resolvers;

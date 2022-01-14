const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express') ;
const { signToken } = require('../utils/auth');

const authAPI = {
    login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });

        if (!user) {
            throw new AuthenticationError('Incorrect credentials');
        }
        
        const isCorrectPass = await user.checkPassword(password);

        if (!isCorrectPass) {
            throw new AuthenticationError('Incorrect credentials');
        }
        
        const token = signToken(user);
        return { token, user };
    },
    me: async (parent, args, context) => {
        if (context.user) {
            const userData = await User
                .findOne({ _id: context.user._id })
                .select('__v -password');
            return userData;
        }

        throw new AuthenticationError('Not logged in!');
    }
};

module.exports = authAPI;
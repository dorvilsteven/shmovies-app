const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const movieSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
        director: {
            type: String,
            required: true
        },
        trailer: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        reactions: []
    },
    {
        toJSON:  {
            virtuals:  true,
            getters:  true
        }
    }
);

movieSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
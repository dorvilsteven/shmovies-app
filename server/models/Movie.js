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
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
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

const Movie = model('Movie', movieSchema);

module.exports = Movie;
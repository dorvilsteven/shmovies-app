const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true
        },
        hash_password: {
            type: String
        },
        rented_movies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};

const User = model('User', userSchema);
module.exports = User;
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const movieSchema = require('./Movie')
const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        rented_movies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ],
        save_movies:[movieSchema]
    },
  
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.methods.Password = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = model("User", userSchema);
module.exports = User;

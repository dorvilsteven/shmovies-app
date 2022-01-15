const { Schema, model } = require('mongoose');

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
        // rented_movies: [
           
        // ],
        save_movies: [{
            type: Schema.Types.ObjectId, 
            ref: 'Movie'
        }]
    },
  
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


const User = model("User", userSchema);

module.exports = User;

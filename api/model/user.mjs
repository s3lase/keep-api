import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
  },

  password: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },

  sessionToken: {
    type: String,
  },

  resetToken: {
    type: String,
  },
});

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

/* eslint-disable func-names */
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  user.password = hashPassword(user.password);
  return next();
});

const User = mongoose.model('User', userSchema);

// const newUser = {
//   email:"eakbo21@gmail.com",
//   password:"eben123"
// }

// User.create(newUser,(err,created)=>{
//   if(created){
//     console.log("We have created a new user.")
//   }
// })

export default User;

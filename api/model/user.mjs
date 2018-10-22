import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type:String
  },

  password:{
    type:String
  },

  createdAt:{
    type:Date,
    default:Date.now
  },

  updatedAt:{
    type:Date,
    default:Date.now
  },

  sessionToken:{
    type:String,
  },

  resetToken:{
    type:String
  }
});

const User = mongoose.model('User',userSchema);

export default User;



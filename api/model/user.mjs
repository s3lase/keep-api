import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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

const hashPassword = (password) =>{
  return new Promise((resolve)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    resolve(hash)
  })
}

userSchema.pre('save', function() {
  return new Promise((reject) => {
    hashPassword(this.password).then((hash)=>{
      this.password = hash;
    }).catch(err=>{
      reject("Something went wrong"+err);
    })
  });
});
const User = mongoose.model('User',userSchema);

export default User;



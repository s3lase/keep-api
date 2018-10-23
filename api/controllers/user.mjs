import UserModel from '../model/user';

class User {
  constructor(){

  }

  findUser(email,password){
    return new Promise ((resolve,reject)=>{
      if(!email || !password)
        reject(`Email or password is not defined`);

      UserModel.findOne({email,password}).then(found=>{
        resolve(found)
      })
    })
  }

  createUser(user){
    return new promise ((resolve,reject)=>{
      if(!user){
        reject(`err: Sorry user is not defined`)
      }

      UserModel.creareUser(user).then(data=>{
        resolve(data)
      }).catch(err=>{
        reject(`An error occured while creating the user ${err}`)
      })
    })
  }

  updateUser(newUser){
    return new Promise((resolve,reject)=>{
      if(!newUser)
        reject(`err: User is not defined`);

      UserModel.findByIdAndUpdate({_id:user._id},{new:true})
        .then(updated=>{
          resolve(data);
        })
        .catch(err=>{
          reject(`An error occured while creating the user ${err}`)
        });
    });
  }

  deleteUser(userId){
    return new Promise((resolve,reject)=>{
      if(!userId)
        reject(`err: Id is not defined`);
      UserModel.findByIdAndRemove({_id:userId},{new:true})
        .then(deletedUser=>{
          resolve(deletedUser);
        })
        .catch(err =>{
          reject(err);
        })
    });
  }
}

export default new User;
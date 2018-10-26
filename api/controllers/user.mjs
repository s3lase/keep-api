import UserModel from '../model/user';

export default class User {
  static findUser(email, password) {
    return new Promise((resolve, reject) => {
      if (!email || !password) {
        reject(new Error('Email or password is not defined'));
      }

      UserModel.findOne({ email, password })
        .then((found) => {
          resolve(found);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static createUser(user) {
    return new Promise((resolve, reject) => {
      if (!user) {
        reject(new Error('err: Sorry user is not defined'));
      }

      UserModel.create(user)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(new Error(`An error occured while creating the user ${err}`));
        });
    });
  }

  static updateUser(newUser) {
    return new Promise((resolve, reject) => {
      if (!newUser) {
        reject(new Error('err: User is not defined'));
      }

      UserModel.findByIdAndUpdate({ id: newUser.id }, { new: true })
        .then((updated) => {
          resolve(updated);
        })
        .catch((err) => {
          reject(new Error(`An error occured while creating the user ${err}`));
        });
    });
  }

  static deleteUser(userId) {
    return new Promise((resolve, reject) => {
      if (!userId) {
        reject(new Error('err: Id is not defined'));
      }

      UserModel.findByIdAndRemove({ id: userId }, { new: true })
        .then((deletedUser) => {
          resolve(deletedUser);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // testing mocha
  static sayHello() {
    return 'hello';
  }
}

// export default new User();

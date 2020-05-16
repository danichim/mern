import mongose from "mongoose";
import { UserSchema } from "../models/userModel";

const User = mongose.model("User", UserSchema);

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const getUsers = (req, res) => {
  User.find({}, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const getUsersWithID = (req, res) => {
  User.findById(req.params.UserId, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.UserId },
    req.body,
    { new: true },
    (err, User) => {
      if (err) {
        res.send(err);
      }
      res.json(User);
    }
  );
};

export const deleteUser = (req, res) => {
  User.remove({ _id: req.params.UserId }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted user" });
  });
};

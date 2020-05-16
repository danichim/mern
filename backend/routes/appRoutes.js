import {
  addNewUser,
  getUsers,
  getUsersWithID,
  updateUser,
  deleteUser,
} from "../controllers/userControllers";

const routes = (app) => {
  app
    .route("/users")
    // GET endpoint
    .get(getUsers)
    // POST endpoint
    .post(addNewUser);

  app
    .route("/user/:UserId")
    // GET specific user
    .get(getUsersWithID)
    // UPDATE specific user
    .put(updateUser)
    // DELETE specific user
    .delete(deleteUser);
};

export default routes;

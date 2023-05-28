// Router de express
const { Router } = require("express");
const { createUser, login, findAllUsers } = require("../controllers/users.controlles");
const {
  createUserValidator,
  loginUserValidator,
} = require("../validators/user.validators");

const router = Router();

router.post("/users", createUserValidator, createUser);

router.post("/users/login", loginUserValidator, login);

router.get("/users", findAllUsers);

module.exports = router;
const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const { createUsers_conversations } = require("../controllers/users_conversations.controllers");

const router = Router();

router.post("/users_conversations", authenticate, createUsers_conversations);

module.exports = router;
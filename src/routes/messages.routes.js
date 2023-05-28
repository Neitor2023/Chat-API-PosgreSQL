const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const { findAllMessages, createMessages } = require("../controllers/messages.controllers");

const router = Router();

router.get("/messages", findAllMessages);

router.post("/messages", authenticate, createMessages);

module.exports = router;
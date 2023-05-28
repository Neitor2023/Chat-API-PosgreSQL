const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const { findAllMessages, createMessages } = require("../controllers/messages.controllers");
const { createMessageValidator } = require("../validators/message.validators");

const router = Router();

router.get("/messages", findAllMessages);

router.post("/messages", authenticate, createMessageValidator, createMessages);

module.exports = router;
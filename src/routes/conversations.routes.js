const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const { createConversationValidator } = require("../validators/conversation.validators");

const { 
    findAllConversations, 
    createConversations, 
    addUserConversation,
    getConversationsByUser, 
    getConversationsById, 
    deleteConversation,
    deleteUserConversation,
} = require("../controllers/conversations.controllers");

const router = Router();

router.get("/conversations", findAllConversations);

router.post("/conversations", authenticate, createConversationValidator, createConversations);

router.post("/conversations/id/:id/add", addUserConversation);

router.get("/conversations/:createById", getConversationsByUser);

router.get("/conversations/id/:Id", getConversationsById);

router.delete("/conversations/id/:id", authenticate, deleteConversation);

router.delete("/conversations/conversationId/:conversationId/participantId/:participantId", authenticate, deleteUserConversation);

module.exports = router;
const Messages = require("../models/messages.model");
const Users = require("../models/users.model");
const Conversations = require("../models/conversations.model");
const Users_conversations = require("../models/users_conversations.model");

const createConversations = async (req, res, next) => {
  try {
    const newConversations = req.body;
    await Conversations.create(newConversations);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const findAllConversations = async (req, res, next) => {
  try {
    const conversations = await Conversations.findAll();
    res.json(conversations);
  } catch (error) {
    next(error);
  }
};

const getConversationsByUser = async (req, res, next) => {
  try {
    const { createById } = req.params;
    const conversations = await Conversations.findAll({
      where: { createById },
      attributes: { exclude: [ "id", "createById", "conversationId"]},
      include: [
        { 
          model: Users,
          attributes: ["username", "id"],
        },
        {
          model: Messages,
          attributes: ['content'],
          include: {
            model: Users,
            attributes: ['id', 'username'],
          }
        }
      ]
    });
    res.json(conversations);
  } catch (error) {
    next(error);
  }
};

const getConversationsById = async (req, res, next) => {
  try {
    const { Id } = req.params;
    const conversations = await Conversations.findByPk(Id,{
      include: [
        { 
          model: Users,
          attributes: ["username", "id"],
        },
        { 
          model: Messages,
        },
        {
          model: Users_conversations,
          include: {
            model: Users,
            attributes: { exclude: [ "lastname", "firstname", "password"]},
          }
        }
      ]
    });
    res.json(conversations);
  } catch (error) {
    next(error);
  }
};

const deleteConversation = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Conversations.destroy({
      where: { id },
    });
    res.status(204).send()
  } catch (error) {
    next(error);
  }
};

const addUserConversation = async (req, res, next) => {
  try {
    const newAddUserConversations = req.body;
    await Conversations.create(newAddUserConversations);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const deleteUserConversation = async (req, res, next) => {
  try {
    const { conversationId, participantId } = req.params;
    await Users_conversations.destroy({
      where: { conversationId } && { participantId },
    });
    res.status(204).send()
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createConversations,
  findAllConversations,
  getConversationsByUser,
  getConversationsById,
  deleteConversation,
  addUserConversation,
  deleteUserConversation,
};
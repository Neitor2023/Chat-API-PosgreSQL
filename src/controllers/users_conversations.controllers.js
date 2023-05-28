const Users_conversations = require("../models/users_conversations.model");

const createUsers_conversations = async (req, res, next) => {
  try {
    const newUsers_conversations = req.body;
    await Users_conversations.create(newUsers_conversations);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUsers_conversations,
};
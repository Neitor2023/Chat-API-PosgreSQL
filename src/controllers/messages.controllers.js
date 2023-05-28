const Messages = require("../models/messages.model");

const createMessages = async (req, res, next) => {
  try {
    const newMessages = req.body;
    await Messages.create(newMessages);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const findAllMessages = async (req, res, next) => {
  try {
    const messages = await Messages.findAll();
    res.json(messages);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMessages,
  findAllMessages,
};
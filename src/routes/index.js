const userRoutes = require("./users.routes");
const users_conversationsRoutes = require("./users_conversations.routes");
const conversationsRoutes = require("./conversations.routes");
const messagesRoutes = require("./messages.routes");
// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(conversationsRoutes);
  app.use(messagesRoutes);
  app.use(users_conversationsRoutes);
};

module.exports = apiRoutes;
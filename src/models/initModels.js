// importar los modelos
const Users = require("./users.model");
const Conversations = require("./conversations.model");
const Messages = require("./messages.model");
const Users_conversations = require("./users_conversations.model");

const initModels = () => {

    // Ref: "conversations"."createById" > "users"."id"

    Conversations.belongsTo(Users, {foreignKey: 'createById'});
    Users.hasMany(Conversations, {foreignKey: 'createById'});

    // Ref: "conversations"."id" < "messages"."conversation_id"
    Messages.belongsTo(Conversations, { foreignKey: "conversationId" });
    Conversations.hasMany(Messages, { foreignKey: "conversationId" });

    // Ref: "users"."id" < "messages"."createBy_Id"
    Messages.belongsTo(Users, { foreignKey: "createById" });
    Users.hasMany(Messages, { foreignKey: "createById" });
    
    // Ref: "conversations"."id" < "users_conversations"."conversation_id"
    Users_conversations.belongsTo(Conversations, {foreignKey: 'conversationId'});
    Conversations.hasMany(Users_conversations, {foreignKey: 'conversationId'});

    // Ref: "users"."id" < "users_conversations"."participant_id"
    Users_conversations.belongsTo(Users, {foreignKey: 'participantId'});
    Users.hasMany(Users_conversations, {foreignKey: 'participantId'});
}

module.exports = initModels;
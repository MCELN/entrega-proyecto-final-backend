const ChatDto = require('../DTO/chat.dto');
const ChatDao = require('../DAO/mongo/chat.dao');

const Chat = new ChatDao();

const getAll = async () => {
    try {
        const result = await Chat.getAll();
        return result;
    } catch (error) {
        throw error;
    };
};

const create = async (messageInfo) => {
    try {
        const newMessage = new ChatDto(messageInfo);
        await Chat.create(newMessage);
        return;
    } catch (error) {
        throw error;
    };
};

module.exports = {
    getAll,
    create,
}
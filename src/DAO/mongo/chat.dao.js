const Chat = require('./models/chat.model');

class ChatDao {
    async getAll() {
        try {
            const result = await Chat.find();
            return result;
        } catch (error) {
            throw error;
        };
    };

    async create(newMessage) {
        try {
            const result = await Chat.create(newMessage);
            return result;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ChatDao;
const BookModel = require("./models/Book");
const ListModel = require("./models/List");

module.exports = {
    Query: {
        getAllBooks: async () => await BookModel.find({}),
        getAllList: async () => await ListModel.find({}),
        getBook: async (_, args) => await BookModel.findById(args._id),
    },

    Mutation: {
        createBook: async (_, args) => {
            const book = new BookModel(args);
            await book.save();
            return book;
        },

        updateBook: async (_, args) => {
            const book = await BookModel.findByIdAndUpdate(args._id, args, {
                new: true,
            });
            return book;
        },

        deleteBook: async (_, args) => {
            const book = await BookModel.findByIdAndRemove(args._id);
            if (book) return true;
            return false;
        },

        createList: async (_, args) => {
            const list = new ListModel(args);
            await list.save();
            return list;
        },
    },
};

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.NODE_API, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Server ready ${url}`);
});

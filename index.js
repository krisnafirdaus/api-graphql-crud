const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const {
    ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

mongoose.connect(
    "mongodb+srv://krisna:Gardafc16.@mydatabase.qo9iq.mongodb.net/crud_graphql",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen().then(({ url }) => {
    console.log(`Server ready ${url}`);
});

const { gql } = require("apollo-server");

const typeDefs = gql`
    type Book {
        _id: ID!
        title: String!
        author: String!
        description: String
        release_year: Int!
        genre: String!
    }

    type List {
        _id: ID!
        part_name: String!
        spesifikasi: String!
        merek: String!
        stock: Int!
        limit: Int!
        use_at: String!
    }

    type Query {
        getAllBooks: [Book]!
        getAllList: [List]!
        getBook(_id: ID!): Book
    }

    type Mutation {
        createBook(
            title: String!
            author: String!
            description: String
            release_year: Int!
            genre: String!
        ): Book!

        createList(
            part_name: String!
            spesifikasi: String!
            merek: String!
            stock: Int!
            limit: Int!
            use_at: String!
        ): List!

        updateBook(
            _id: ID!
            title: String
            author: String
            description: String
            release_year: Int
            genre: String
        ): Book!

        deleteBook(_id: ID!): Boolean
    }
`;

module.exports = typeDefs;

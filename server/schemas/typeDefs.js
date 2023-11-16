const typeDefs = `

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
    }

type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
    }

type Auth {
    token: ID!
    user: User
    }

type Query {
    me: User
    users: [User]
    books: [Book]
    }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String): User
    removeBook(bookId: String): User
    }

input BookSearch {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
    }

`;

module.exports = typeDefs;

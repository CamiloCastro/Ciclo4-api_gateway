const { gql } = require('apollo-server');

const transactionTypeDefs = gql `

    input TransactionInput {
        usernameOrigin: String!
        usernameDestiny: String!
        value: Int!
    }

    type Transaction {
        id: String!
        usernameOrigin: String!
        usernameDestiny: String!
        value: Int!
        date: String!
    }

    type Query {
        transactionByUsername(username: String!): [Transaction]
    }

    type Mutation {
        createTransaction(transaction: TransactionInput!) : Transaction
    }

`;

module.exports = transactionTypeDefs;



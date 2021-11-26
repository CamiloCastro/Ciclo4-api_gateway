const { gql } = require('apollo-server');

const authTypeDefs = gql `

    input CredentialsInput {
        username: String!
        password: String!
    }

    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        name: String!
        email: String!
        balance: Int!
    }    

    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        email: String!
    }

    type Query {
        userDetailById(userId: Int!): UserDetail!
    }

    type Mutation {
        signUpUser(userInput: SignUpInput!): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }
`;

module.exports = authTypeDefs;
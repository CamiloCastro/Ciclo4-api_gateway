const transactionResolver = {

    Query: {

        transactionByUsername: async (_, { username }, { dataSources, userIdToken }) => {
            usernameToken = ( await dataSources.authAPI.getUser(userIdToken)).username;
            if(username == usernameToken)
                return await dataSources.accountAPI.transactionByUsername(username);
            else
                return null;
        }
    },

    Mutation: {

        createTransaction: async (_, { transaction }, { dataSources, userIdToken }) => {
            usernameToken = ( await dataSources.authAPI.getUser(userIdToken)).username;
            if(transaction.usernameOrigin == usernameToken)
                return await dataSources.accountAPI.createTransaction(transaction);
            else
                return null;
        }
    }
}

module.exports = transactionResolver;
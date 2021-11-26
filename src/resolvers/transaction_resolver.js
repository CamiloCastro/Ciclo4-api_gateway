const transactionResolver = {

    Query: {

        transactionByUsername: async (_, { username }, { dataSources, userIdToken }) => {
            usernameToken = ( await dataSources.AuthAPI.getUser(userIdToken)).username;
            if(username == usernameToken)
                return await dataSources.AccountAPI.transactionByUsername(username);
            else
                return null;
        }
    },

    Mutation: {

        createTransaction: (_, { transaction }, { dataSources, userIdToken }) => {
            usernameToken = ( await dataSources.AuthAPI.getUser(userIdToken)).username;
            if(transaction.usernameOrigin == usernameToken)
                return await dataSources.AccountAPI.createTransaction(transaction);
            else
                return null;
        }
    }
}

module.exports = transactionResolver;
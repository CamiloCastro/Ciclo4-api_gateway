const accountResolver = {

    Query: {

        accountByUsername: async (_, { username }, { dataSources, userIdToken }) => {

            usernameToken = ( await dataSources.AuthAPI.getUser(userIdToken)).username;
            if(username == usernameToken)
                return await dataSources.AccountAPI.accountByUsername(username);
            else
                return null;
        }

    },
    Mutation: {}

}

module.exports = accountResolver;
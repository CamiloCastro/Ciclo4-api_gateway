const authResolver = {

    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {            
            if(userId == userIdToken)
                return dataSources.AuthAPI.getUser(userId);
            else
                return null;
        }
    },

    Mutation: {

        signUpUser: async (_, { userInput }, { dataSources }) => {
            
            const accountInput = {
                username: userInput.username,
                balance: userInput.balance,
                lastChange: (new Date()).toISOString()
            }

            await dataSources.AccountAPI.createAccount(accountInput);

            const authInput = {
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                email: userInput.email
            }

            return await dataSources.AuthAPI.createUser(authInput);
        },

        logIn: (_, { credentials }, { dataSources }) => {            
            return dataSources.AuthAPI.authRequest(credentials);
        },

        refreshToken: (_, { token }, { dataSources }) => {            
            return dataSources.AuthAPI.refreshToken(token);
        },

    }
}

module.exports = authResolver;
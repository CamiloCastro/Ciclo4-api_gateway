const serverConfig = require('../server');
const fetch = require('node-fetch');
const { ApolloError } = require('apollo-server-errors');

const authentication = async ( { request } ) => {    

    const token = request.headers.authorization || '';

    if (token == '')
        return { userIdToken: null }
    
    else {

        try {

            let requestOptions = {
                method: 'POST',
                body: JSON.stringify({ token }),
                headers: {'Content-Type' : 'application/json'},
                redirect: 'follow'
            };

            let response = await fetch(
                `${serverConfig.auth_api_url}/verifyToken/`,
                requestOptions
            );

            if( response.status != 200) {
                console.log(response);
                throw new ApolloError(`NO AUTORIZADO - ${401}`, 401);
            }

            return { userIdToken: (await response.json()).UserId }                                   

        } catch(error) {
            throw new ApolloError(`TOKEN ERROR: ${500}`, 500);
        }
    }
}

module.exports = authentication;
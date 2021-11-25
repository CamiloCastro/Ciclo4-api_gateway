const auth = require('./utils/authentication')

const req = {
    request : {
        headers : {
            authorization : "TOKEN"
        }
    }
}

console.log(req);

auth(req)
    .then( ( resp ) => console.log(resp) )
    .catch ( (error) => console.log(error) );
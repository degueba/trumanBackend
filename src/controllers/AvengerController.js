const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { name } = request.body;

        let result = await connection('avengers').insert({name});

        console.log(result);
    }
}
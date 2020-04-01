const connection = require('../database/connection');

module.exports = {
    async select(request, response){
        let avengers = await connection('avengers').select('*');

        return response.json(avengers)
    },
    async create(request, response){
        const { name } = request.body;

        let result = await connection('avengers').insert({name});

        console.log(result);
    }
}
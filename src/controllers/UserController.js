const crypto = require('crypto');
const connection = require('../database/connection');
const emailTrigger = require('../triggers/email');

module.exports = {
    async select(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },
    
    async create(request, response) {
        const { name, email, password } = request.body;
    
        await connection('users').insert({
            name,
            email,
            password
        })
        
        let html = `<div>User registered. Welcome ${email}.</div>`
        emailTrigger.main(html).catch(console.error);
        return response.json({ 'msg': 'User created succesfully', "status": true })
    },

    async login(request, response){
        const { email, password } = request.body;

        let user = await connection('users').select('*').where("email",`${email}`).andWhere("password", password);
        

        if(!user[0]){
            return response.status(401).json({ error: 'Operation not permited'})

            return
        }

        return response.status(200).json({msg: 'Logado com sucesso!', "user": { "id": user[0].id, "email": user[0].email }})
    }
}

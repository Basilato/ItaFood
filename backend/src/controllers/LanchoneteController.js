const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {
        async index(request, response) {
            const lanchonetes = await connection('lanchonetes').select('*');
       
        return response.json(lanchonetes);
    },


    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('lanchonetes').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json( { id } );
    }

};
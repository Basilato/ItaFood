const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const lanchonete_id = request.headers.authorization;

        const produtos = await connection('produtos')
        .where('lanchonete_id', lanchonete_id)
        .select('*');

        return response.json(produtos);

    }
};

// para retornar so da lanchonete escolhida
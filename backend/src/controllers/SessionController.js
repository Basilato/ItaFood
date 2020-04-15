const connection = require('../database/connection');


module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const lanchonete = await connection('lanchonetes')
        .where('id', id)
        .select('name')
        .first();

        if(!lanchonete) {
            return response.status(400).json({ error: 'No Lanchonete found with this ID' });
        }

        return response.json(lanchonete);
    }
}
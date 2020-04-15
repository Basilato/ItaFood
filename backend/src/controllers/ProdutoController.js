const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const  [ count ]  = await connection('produtos').count();

        console.log(count);

        const produtos = await connection('produtos')
        .join('lanchonetes', 'lanchonetes.id', '=', 'produtos.lanchonete_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'produtos.*', 
            'lanchonetes.name', 
            'lanchonetes.email', 
            'lanchonetes.whatsapp']);

        response.header('X-Total-Count', count['count(*)']);
        return response.json(produtos);
    },

    async create(request, response){
        const { title, description, value} = request.body;
        const lanchonete_id = request.headers.authorization;

        const [id] = await connection('produtos').insert({
            title,
            description,
            value,
            lanchonete_id,
        });
        
        return response.json({id});
    },

    async delete(request, response) {
        const { id } = request.params;
        const lanchonete_id = request.headers.authorization;

        const produto = await connection('produtos')
        .where('id', id)
        .select('lanchonete_id')
        .first();
        if(produto.lanchonete_id != lanchonete_id) {
            return response.status(401).json ({error: 'Operation not permitted.'});
        }

        await connection('produtos').where('id', id).delete();

        return response.status(204).send();
    }
};
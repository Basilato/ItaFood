
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
       // table.binary('img').notNullable();
        
        table.string('lanchonete_id').notNullable();
    
        table.foreign('lanchonete_id').references('id').inTable('lanchonetes');

  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
};
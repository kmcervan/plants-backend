exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 200).notNullable().unique();
            tbl.string('password', 256).notNullable();
            tbl.string('phone', 15);
        })
        .createTable('plants', tbl => {
            tbl.increments();
            tbl.string('nickname', 200).notNullable();
            tbl.string('species', 200);
            tbl.string('h2oFrequency', 200);
            tbl.string('image');
            // tbl.integer('userId')
            //     .notNullable()
            //     .references('id')
            //     .inTable('users')
            //     .onDelete('CASCADE')
            //     .onUpdate('CASCADE');
        })
        .createTable('user_plants', tbl => {
            tbl.increments();
            tbl.integer('userId').notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
            tbl.integer('plantId').notNullable().references('id').inTable('plants').onDelete('CASCADE').onUpdate('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user_plants')
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
};
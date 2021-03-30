
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 200).notNullable().unique();
            tbl.string('password', 256).notNullable();
            tbl.string('phone', 10);
        })
        .createTable('plants', tbl => {
            tbl.increments('plantId');
            tbl.string('nickname', 200).notNullable();
            tbl.string('species', 200);
            tbl.string('h2oFrequency', 200);
            tbl.binary('image');
            tbl.integer('userId')
                .unsigned()
                .references('users.id')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
        // .createTable('user_plants', tbl => {
        //     tbl.increments('user_plantId');
        //     tbl.integer('userId').unsigned().references('users.id').inTable('users').onDelete('RESTRICT').onUpdate('CASCADE');
        //     tbl.integer('plantId').unsigned().references('plantId').inTable('plants').onDelete('RESTRICT').onUpdate('CASCADE');
        // })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('plants')
};

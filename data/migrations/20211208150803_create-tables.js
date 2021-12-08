
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('characters', table => {
            table.increments();
            table.string('name');
            table.string('image')
        })      
        .createTable('teams', table => {
            table.increments();
            table.string('name');
            tasks.integer('character1')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tasks.integer('character2')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tasks.integer('character3')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tasks.integer('character4')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tasks.integer('character5')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
        })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('teams')
        .dropTableIfExists('characters')
  )
};

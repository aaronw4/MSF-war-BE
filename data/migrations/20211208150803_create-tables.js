
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
            table.integer('character1')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            table.integer('character2')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            table.integer('character3')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            table.integer('character4')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            table.integer('character5')
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

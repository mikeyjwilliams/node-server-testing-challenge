/** @format */

exports.up = async function(knex) {
  await knex.schema.createTable('answers', tbl => {
    tbl.increments('id');
    tbl
      .string('title')
      .notNullable()
      .unique();
    tbl.text('solution').notNullable();
    tbl.text('comment').nullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('answers');
};

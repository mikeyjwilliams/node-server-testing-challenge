/** @format */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('answers').truncate();

  await knex('answers').insert([
    {
      title: 'database is locked',
      solution: 'use --runInBand to run all syncronously.',
      comments:
        'sometimes database is locked due to dbBrowser or some other call similar and need to write changes first',
    },
    {
      title: 'node issue',
      solution: 'check version',
      comments: 'not all items are compatiable with all versions',
    },
    {
      title: 'jest',
      solution: 'check docs',
      comments: 'when in doubt read the docs... thats all i got.',
    },
  ]);
};

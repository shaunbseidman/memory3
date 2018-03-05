
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw("DELETE FROM game; Alter Sequence game_id_seq RESTART WITH 4;")
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        {id: 1, name: 'Breath of the Wild', developer: 'Nintendo', rating: 8.5},
        {id: 2, name: 'Fez', developer: 'Polytron', rating: 7.4},
        {id: 3, name: 'Anti-Chamber', developer: 'Demruth', rating: 8.1},
      ]);
    });
};

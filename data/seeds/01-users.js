exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'qwerty1',
      password: 'password1',
      phone: '13568497589'
    },

    {
      username: 'admin123',
      password: 'password1',
      phone: '13568497588'
    },
    {
      username: 'test123',
      password: 'password1',
      phone: '11234567899'
    }
  ]);
};
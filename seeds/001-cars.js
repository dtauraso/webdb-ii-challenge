
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '543256GGRT', make: 'saturn', model: 'ion', milage: 7000}
      ]);
    });
};

      // VIN 543256GGRT string
      // make saturn string
      // model ion string
      // milage 70000 int
  

exports.up = function (knex) {
  // DO YOUR MAGIC
return knex.schema.createTable('cars', tbl => {
  tbl.increments();
  tbl.text()
})


};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars');
};

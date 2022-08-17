exports.up = function (knex) {
  // DO YOUR MAGIC
return knex.schema.createTable('Cars', tbl => {
  tbl.increments();
  tbl.text('vin', 128);
  tbl.text('make', 60);
  tbl.text('model', 60);
  tbl.integer('mileage');
  tbl.text('title', 60);
  tbl.text('transmission', 60);
})


};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('Cars');
};

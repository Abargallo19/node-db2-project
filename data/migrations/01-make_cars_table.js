exports.up = function (knex) {
  // DO YOUR MAGIC
return knex.schema.createTable('Cars', tbl => {
  tbl.increments();
  tbl.varchar('vin', 128).notNullable().unique(); //not null; unique
  tbl.varchar('make', 60).notNullable();
  tbl.varchar('model', 60).notNullable();
  tbl.integer('mileage').notNullable();
  tbl.varchar('title', 60);
  tbl.varchar('transmission', 60);
})


};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('Cars');
};

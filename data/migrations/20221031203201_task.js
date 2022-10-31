/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tasks", function (tasks) {
    tasks.increments("task_id");
    tasks
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("project_id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tasks.text("task_notes");
    tasks.text("task_description").notNullable();
    tasks.boolean("task_completed").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};

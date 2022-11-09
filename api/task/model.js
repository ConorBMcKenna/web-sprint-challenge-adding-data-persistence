// build your `Task` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert,
};

function get(id) {
  if (id) {
    return db("tasks")
      .where("task_id", id)
      .first()
      .then((task) => {
        task.task_completed = task.task_completed ? true : false;
        return task;
      });
  } else {
    return db("tasks")
      .join("projects", "projects.project_id", "tasks.project_id")
      .select(
        "tasks.task_id",
        "tasks.task_description",
        "tasks.task_notes",
        "tasks.task_completed",
        "projects.project_name",
        "projects.project_description"
      )
      .then((tasks) => {
        return tasks.map((item) => {
          item.task_completed = item.task_completed ? true : false;
          return item;
        });
      });
  }
}

function insert(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      console.log(
        "================================================================",
        id
      );
      return get(id);
    });
}

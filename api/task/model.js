// build your `Task` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert,
};

function get(id) {
    if(id){
        return db("tasks").where("task_id", id).first().then((task)=>{
            task.task_completed = task.task_completed ? true : false;
            return task;
        })
    } else {
        return db("tasks").then((tasks) => {
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
        console.log("================================================================", id)
        return get(id)
    });

}



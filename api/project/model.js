// build your `Project` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
    if(id){
        return db("projects").where("project_id", id).first().then((project)=>{
            project.project_completed = project.project_completed ? true : false;
            return project;
        })
    } else {
        return db("projects").then((projects) => {
            return projects.map((item) => {
              item.project_completed = item.project_completed ? true : false;
              return item;
            });
          });
    }
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => {
        console.log("================================================================", id)
        return get(id)
    });

}

function update(id, changes) {
  return db("projects")
    .where("id", id)
    .update(changes)
    .then((count) => (count > 0 ? get(id) : null));
}

function remove(id) {
  return db("projects").where("id", id).del();
}

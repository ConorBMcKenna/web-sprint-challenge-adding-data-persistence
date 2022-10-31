// build your `Project` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert,
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



// build your `Resource` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert,
};
function get(id) {
    if(id){
        return db("resources").where("resource_id", id).first()
        
    } else {
        return db("resources")
    }
}

function insert(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
        return get(id)
    });

}
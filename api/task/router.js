// build your `/api/tasks` router here
const {
    get,
    insert,
  } = require("./model");
  const express = require("express");
  const router = express.Router();
  
  router.get("/", (req, res) => {
    get()
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

  });

  router.post("/", (req, res) => {
    console.log(req.body)
    insert(req.body)
    .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  })
  module.exports=router;
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put("/:id", (req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete("/:id", (req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });


module.exports = router;

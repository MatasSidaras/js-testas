const express = require("express");
const app = express();
const port = 3000;

let skills = [];

app.use(express.json());

app.get("testskills", (req, res) => {
  res.json(skills);
});

app.post("testskills", (req, res) => {
  const { skill } = req.body;
  if (!skill) {
    return res.status(400).send("Skill is required");
  }
  skills.push(skill);
  res.status(201).send("Success");
});

app.delete("testskills/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0 || id >= skills.length) {
    return res.status(404).send("Skill not found");
  }
  skills.splice(id, 1);
  res.status(200).send("Success");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

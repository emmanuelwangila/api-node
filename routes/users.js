import express from "express";

const router = express.Router();

const users = [
  {
    firstname: "Emmanuel",
    lastname: "Wangila",
    age: "21",
  },
  {
    firstname: "Edwin",
    lastname: "Simiyu",
    age: "33",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.firstname} aadded to the database!`);
});

export default router;

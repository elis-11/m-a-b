## 1:
- npm i express nodemon -D 
- start: 'node index' / npm start
- dev: 'nodemon index' / npm run dev
- 12:30 INSOMNIA
--------------------
app.get("/test", (req, res) => {
    res.send("It works")
})

--------------------
## 2:
- ATLAS
- .env
- connecting to MongoDB
- npm i mongoose dotenv
------------
## 3:
- model schema
------------
## 4:
- ROUTERS
- INSOMNIA
- 3:50 insomnia send




-------------------------------
## https://www.youtube.com/watch?v=scYojqjnHzI&list=PLJM1tXwlGdaf57oUx0rIqSW668Rpo_7oU


const router = require("express").Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;

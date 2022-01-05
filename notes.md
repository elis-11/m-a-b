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
- 8 ---VALIDATION
- 9:20 error message (404)
-----------
## 5:
- HASH
- npm i bcryptjs
-     // hash the password
    const bcrypt = require("bcryptjs");
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(passwordHash);
- 3:30 ---save a new user account to the database
- 5:03 ATLAS (send new data to the ATLAS )
- 6:05 ---log the user in -- jwt.io





-------------------------------
## https://www.youtube.com/watch?v=scYojqjnHzI&list=PLJM1tXwlGdaf57oUx0rIqSW668Rpo_7oU


const router = require("express").Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;

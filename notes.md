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
- npm i jsonwebtoken
-       const token = jwt.sign({
          user: savedUser._id
        }, process.env.JWT_SECRET)
        console.log(token);
- 15:28 delete everything from ATLAS
- 15:35 COOKIES (got data in ATLAS)
- 19:20! ATLAS -send access token to the in a cookie
-----------
## 6:
- LOG IN
- 5:15 login endpoint---loged in
- 5:40 logout endpoint---CLEAR COOKIES
- 7:08! INSOMNIA logout endpoint
- MDB_CONNECT=mongodb+srv://elis:elis@cluster0.gzwcn.mongodb.net/dev?retryWrites=true&w=majority'
- MDB_CONNECT='mongodb+srv://elis:elis@cluster0.ldv56.mongodb.net/dev?retryWrites=true&w=majority'
- MDB_CONNECT='mongodb+srv://elis:elis@cluster0.gzwcn.mongodb.net/dev?retryWrites=true&w=majority'
---------
## 7: 
- create customer model
- 4:50 new customer- to create INSOMNIA
- 7:20 middleware
- 11:45 npm i cookie-parser
- 16 verify
- 17:11 stop



-------------------------------
## https://www.youtube.com/watch?v=scYojqjnHzI&list=PLJM1tXwlGdaf57oUx0rIqSW668Rpo_7oU

----.env--back-------
MDB_CONNECT=mongodb+srv://elis:elis@cluster0.ldv56.mongodb.net/auth?retryWrites=true&w=majority
JWT_SECRET=5HD27dhb9boXk8IBIeDHOhUsnnN7yz*^4tuJeL90ne*&

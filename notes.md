## 1: BACKEND
- npm i express nodemon -D 
- start: 'node index' / npm start
- dev: 'nodemon index' / npm run dev
- 12:30 INSOMNIA
---
app.get("/test", (req, res) => {
    res.send("It works")
})
--------------------
## 2:
- ATLAS
- .env
- connecting to MongoDB
- npm i mongoose dotenv
---
## 3:
- model schema
---
## 4:
- ROUTERS
- INSOMNIA
- 3:50 insomnia send
- 8 ---VALIDATION
- 9:20 error message (404)
---
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
---
## 6:
- LOG IN
- 5:15 login endpoint---loged in
- 5:40 logout endpoint---CLEAR COOKIES
- 7:08! INSOMNIA logout endpoint
---
## 7: 
- create customer model
- 4:50 new customer- to create INSOMNIA
- 7:20 middleware
- 11:45 npm i cookie-parser
- 16 verify
- 18 verified.user
- 21 create new customer- insomnia
- 22:15 get all customers- insomnia
---
## 8: FRONTEND
- npx create-react-app 
- 5:33 npm i react-router-dom@5
- 8:40 Router
- 10 Navbar
---
## 9: Register Form
- register
- 3:10 register HOOKS
- 6 submit-register
- install AXIOS
- create new USER 
- 10:15 install CORS into SERVER
- REGISTER --doesn't work
-----------------
## 10: Login
---
## 11: Customers
- login
- 16:30 error
- 24:39 USEHISTORY  
- auth context
---
## 12: Rendering Customers
- 12 login customer- doesn't work
---
## 13: Deploying the server
# https://mern-auth-bk.herokuapp.com/
---
## 14: Deploying the client
# https://elis-mern-auth.netlify.app
- 16 _redirects file- netlify-404
---



-------------------------------
## https://www.youtube.com/watch?v=scYojqjnHzI&list=PLJM1tXwlGdaf57oUx0rIqSW668Rpo_7oU


https://mern-auth-bk.herokuapp.com/
https://elis-mern-auth.netlify.app

---
# --start Previev notes.md with
- S || V

---
# --start server with--
- node index
- nonemon index
- npm run dev
- npm start
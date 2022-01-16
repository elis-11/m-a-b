import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { "type": "String", "required": "true" },
    passwordHash: { "type": "String", "required": "true" },
})

const User = mongoose.model('user', userSchema);

import default User;
--------------------------------
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcryptjs = require("bcryptjs");


dotenv.config();
// connect to mongoDB
mongoose.connect(
  process.env.MDB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },

  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

//set up server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` :) Server started on port ${PORT}`));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// set up routes 5:17
app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));


---Router.js---
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/customer">
          <div>Customers</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;


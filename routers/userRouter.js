const router = require("express").Router();

router.post("/", (req, res) => {
//   res.send("test");
console.log(req.body);
res.sendStatus(200);
});

module.exports = router;

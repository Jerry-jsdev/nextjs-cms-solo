var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users =[
    {id:1, name:"John Doe"},
    {id:2, name:"Jane Alex"},
    {id:3, name:"Tom Richar"},
    {id:4, name:"Michael Hill"},
    {id:5, name:"Steven van"},
  ]
 return res.status(200).json({ users });
  // get form database÷
});

module.exports = router;

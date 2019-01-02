var express = require('express');
var router = express.Router();
const Validator = require('../validation/dict');
const Word = require('../models/words');
const authentication = require('./Authentication');

router.post('/', authentication, Validator.addNewWord, (req, res) => {
  req.check('english', 'không đúng định dạng').notEmpty().isString();
  req.check('vietnamese', 'không đúng định dạng').notEmpty().isString();
  const data = {
    english: req.body.english,
    vietnamese: req.body.vietnamese,
  }
  const word = new Word(data);
  word.save((err, word) => {
    if (err)
      return res.status(400).send({ "status": false, "message": err });
    return res.status(200).send({ "status": true, "message": word });
  })

})

router.get('/test',(req,res)=>{
  console.log(process.env.PORT);
})


module.exports = router;

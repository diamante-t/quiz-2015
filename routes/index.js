var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quizz' });
});

//preguntas y respuestas
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

//author
router.get("/author",function (req,res) {
  res.render("author", {author: "Nelson"});
});

module.exports = router;

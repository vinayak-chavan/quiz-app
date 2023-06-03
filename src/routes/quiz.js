const express = require('express');
const { auth } = require("../middlewares/auth");

const {
  homeView,
  allView,
  quizView,
  quizSubmit,
  levelQuizView,
  addQuizView,
  addQuiz,
  quizStats,
} = require('../controllers/quiz.controller');

const route = express.Router();

route.get('/home', auth, homeView);
route.get('/all', auth, allView);
route.get('/quiz/:id', auth, quizView);
route.get('/level/:title', auth, levelQuizView);
route.post('/quizSubmit', auth, quizSubmit);
route.get('/addquiz', auth, addQuizView);
route.post('/addquiz', auth, addQuiz);
route.get('/stats/:id', auth, quizStats,
);

module.exports = route;
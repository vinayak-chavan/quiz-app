const user = require("../models/user");
const quiz = require("../models/quiz");
const { successResponse, errorResponse } = require("../utils");

const allView = async (req, res) => {
  try {
    const quizData = await quiz.find({ prebuilt: false });
    res.render("allQuiz", { quizes: quizData });
  } catch (error) {
    return errorResponse(req, res, "something went wrong", 400);
  }
};

const homeView = async (req, res) => {
  try {
    const quizData = await quiz.find({ prebuilt: true, level: 1 });
    res.render("home", { quizes: quizData });
  } catch (error) {
    return errorResponse(req, res, "something went wrong", 400);
  }
};

const addQuizView = async (req, res) => {
  try {
    res.render("addQuiz");
  } catch (error) {
    return errorResponse(req, res, "something went wrong", 400);
  }
};

const addQuiz = async (req, res) => {
  try {
    const userId = req.user._id;

    let options1 = [];
    options1.push(req.body.q1o1, req.body.q1o2, req.body.q1o3, req.body.q1o4);
    let options2 = [];
    options2.push(req.body.q2o1, req.body.q2o2, req.body.q2o3, req.body.q2o4);
    let options3 = [];
    options3.push(req.body.q3o1, req.body.q3o2, req.body.q3o3, req.body.q3o4);
    let options4 = [];
    options4.push(req.body.q4o1, req.body.q4o2, req.body.q4o3, req.body.q4o4);
    let options5 = [];
    options5.push(req.body.q5o1, req.body.q5o2, req.body.q5o3, req.body.q5o4);
    let options6 = [];
    options6.push(req.body.q6o1, req.body.q6o2, req.body.q6o3, req.body.q6o4);
    let options7 = [];
    options7.push(req.body.q7o1, req.body.q7o2, req.body.q7o3, req.body.q7o4);
    let options8 = [];
    options8.push(req.body.q8o1, req.body.q8o2, req.body.q8o3, req.body.q8o4);
    let options9 = [];
    options9.push(req.body.q9o1, req.body.q9o2, req.body.q9o3, req.body.q9o4);
    let options10 = [];
    options10.push(req.body.q10o1, req.body.q10o2, req.body.q10o3, req.body.q10o4);
    let options11 = [];
    options11.push(req.body.q11o1, req.body.q11o2, req.body.q11o3, req.body.q11o4);
    let options12 = [];
    options12.push(req.body.q12o1, req.body.q12o2, req.body.q12o3, req.body.q12o4);
    let options13 = [];
    options13.push(req.body.q13o1, req.body.q13o2, req.body.q13o3, req.body.q13o4);
    let options14 = [];
    options14.push(req.body.q14o1, req.body.q14o2, req.body.q14o3, req.body.q14o4);
    let options15 = [];
    options15.push(req.body.q15o1, req.body.q15o2, req.body.q15o3, req.body.q15o4);
    const question = [
      {
        text : req.body.que1,
        answer : req.body.ans1,
        options : options1,
      },
      {
        text : req.body.que2,
        answer : req.body.ans2,
        options : options2,
      },
            {
        text : req.body.que3,
        answer : req.body.ans3,
        options : options3,
      },
            {
        text : req.body.que4,
        answer : req.body.ans4,
        options : options4,
      },
            {
        text : req.body.que5,
        answer : req.body.ans5,
        options : options5,
      },
            {
        text : req.body.que6,
        answer : req.body.ans6,
        options : options6,
      },
            {
        text : req.body.que7,
        answer : req.body.ans7,
        options : options7,
      },
            {
        text : req.body.que8,
        answer : req.body.ans8,
        options : options8,
      },
            {
        text : req.body.que9,
        answer : req.body.ans9,
        options : options9,
      },
            {
        text : req.body.que10,
        answer : req.body.ans10,
        options : options10,
      },
            {
        text : req.body.que11,
        answer : req.body.ans11,
        options : options11,
      },
            {
        text : req.body.que12,
        answer : req.body.ans12,
        options : options12,
      },
            {
        text : req.body.que13,
        answer : req.body.ans13,
        options : options13,
      },
            {
        text : req.body.que14,
        answer : req.body.ans14,
        options : options14,
      },
            {
        text : req.body.que15,
        answer : req.body.ans15,
        options : options15,
      },
    ];
      
      const payload = {
        userId: userId,
        title: req.body.title,
        question : question
      };

      // register new user
      const newQuiz = new quiz(payload);
      const insert = await newQuiz.save();
      
  } catch (error) {
    console.log('error-->', error.message);
    return errorResponse(req, res, "something went wrong", 400);
  }
};

const quizView = async (req, res) => {
  try {
    const quizId = req.params.id;
    const quizData = await quiz.findOne({ _id: quizId });
    res.render("quizView", { quiz: quizData });
  } catch (error) {
    return errorResponse(req, res, "something went wrong", 400);
  }
};

const levelQuizView = async (req, res) => {
  try {
    const quizTitle = req.params.title;
    const quizData = await quiz.findOne({ title: quizTitle, level: 2 });
    res.render("quizView", { quiz: quizData });
  } catch (error) {
    return errorResponse(req, res, "something went wrong", 400);
  }
};

const quizSubmit = async (req, res) => {
  try {
    let result = 0;

    let userId = req.user._id;
    const quizId = req.body._id;
    const quizData = await quiz.findOne({_id: quizId});
    delete req.body._id;
    let data = req.body;

    const keys = Object.keys(data);
    keys.forEach((key, index) => {
      if(key === data[key]) {
          result++;
      }
    });

    let obj = {
      _id: userId, 
      result: result,
    }

    let array = quizData.result;
    array.push(obj);

    const updatedData = await quiz.findOneAndUpdate({_id: quizId}, {result: array});
    res.render("resultPage", { quiz: updatedData, result: result });
  } catch (error) {
    console.log(error.message);
    return errorResponse(req, res, "something went wrong", 400);
  }
};

const quizStats = async (req, res) => {
  try {
    let array = [];
    const quizId = req.params.id;
    const quizData = await quiz.findOne({_id: quizId});
    quizData.result.forEach(async(ele) => {
      let userData = await quiz.findById(ele._id);
      let obj = {};
      obj.name = userData.userName;
      obj.marks = ele.result;
      array.push(obj);
    });
    res.render("statPage", { profile: array });
  } catch (error) {
    console.log(error.message);
    return errorResponse(req, res, "something went wrong", 400);
  }
};

module.exports = {
  homeView,
  quizView,
  quizSubmit,
  levelQuizView,
  addQuizView,
  addQuiz,
  allView,
  quizStats,
};
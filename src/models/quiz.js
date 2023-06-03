const mongoose = require("mongoose");
const Schema = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  prebuilt: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 15,
  },
  marks: {
    type: Number,
    default: 15,
  },
  result: {
    type: [],
    default: [],
  },
  question: {
    type: [],
  },
  level: {
    type: Number,
    default: 1,
  }
});

const quiz = new mongoose.model('quiz', QuizSchema);

module.exports = quiz;
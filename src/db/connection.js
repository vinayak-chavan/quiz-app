const mongoose = require('mongoose');

// const url = "mongodb://localhost:27017/quizzy?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
// const url = "mongodb+srv://chavanvinayak017:quizzy@cluster0.iwx9beo.mongodb.net/";
const url = "mongodb+srv://quizzy:quizzy@cluster0.rguq1di.mongodb.net/";

(async () => {
  try {
    await mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (e) {
    console.log(`connection error ${e}`);
  }
})();

const db = mongoose.connection;

db.once("open", async () => {
  console.log(`✔ Successfully connected to mongodb database`);
});
db.on("error", () => {
  console.log(`connection error while connection at ${URL}`);
});

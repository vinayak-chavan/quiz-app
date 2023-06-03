require('./src/db/connection');
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');

dotenv.config();
const userRoutes = require('./src/routes/user');
const quizRoutes = require('./src/routes/quiz');

const app = express();
const port = 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/src/public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(cookieParser());
app.use('/', userRoutes);
app.use('/', quizRoutes);

app.listen(port, () => {
    console.log(`connection is live at port ${port}`);
});
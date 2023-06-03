const bcrypt = require("bcryptjs");
const { sendmail } = require('../utils/mail');
const quiz = require("../models/quiz");
const user = require("../models/user");

const { successResponse, errorResponse } = require("../utils");

const login = async (req, res) => {
  try {
    const emailID = req.body.emailID;
    const password = req.body.password;
    let message;
    // check for email exist or not
    const userData = await user.findOne({ emailID: emailID });
    if (!userData) {
      message = 'Email id is not registered';
      res.render("login", {message: message});
    }
    else {
      // check for the password
      const isMatch = await bcrypt.compare(password, userData.password);

      if (!isMatch) {
        message = 'Password is wrong';
        res.render("login", {message: message});
      
    } else {
        // jwt token created
        let accessToken = userData.getToken({
          exp: 60 * 60,
          secret: 'secret',
        });

        res.cookie("accessToken", accessToken);
        await userData.save();

        res.redirect("/home");
        
        // return successResponse(req, res, accessToken, 200);
      }
    }
  } catch (error) {
    console.log(error.message);
    return errorResponse(req, res, "something went wrong!", 400, {
      err: error,
    });
  }
};

const register = async (req, res) => {
  try {
    const { emailID, password, userName } = new user(req.body);

    // check if email id allready exist
    const userData = await user.findOne({ emailID: emailID });

    if (userData) {
      return errorResponse(req, res, "email id allready exist", 400);
    } else {
      // creating payload
      const payload = {
        userName,
        emailID,
        password,
      };

      // register new user
      const newUser = new user(payload);
      const insertUser = await newUser.save();

      console.log("Registration Successful");
      res.render("login");
      // return successResponse(req, res, insertUser, 200);
    }
  } catch (error) {
    console.log(error.message)
    return errorResponse(req, res, "something went wrong", 400);
  }
};

const loginView = async (req, res) => {
  let message = '';
  res.render("login", {message: message});
};

const viewProfile = async (req, res) => {
  try {
    
    const id = req.user._id;
    let profile = [];
    let userData = await user.findOne({ _id: id });
    let quizData = await quiz.find();
    quizData.forEach(ele => {
      ele.result.forEach(element => {
        if(element._id.equals(id)){
          let obj = {};
          obj.id = ele._id;
          obj.title = ele.title;
          obj.result = element.result;
          profile.push(obj);
        }
      })
    });
    
      // check if data is exist or not
      if (!userData) {
        let userData = {
          userName : ' ',
          emailID: ' ',
        }
        res.render("userProfile", { users: userData, profile: profile });
      } else {
        res.render("userProfile", { users: userData, profile: profile });
      }

  } catch (error) {
    console.log('error-->', error.message);
    return errorResponse(req, res, "something went wrong", 400);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken");
    return res.redirect("/");
  } catch (error) {
    return errorResponse(req, res, "Error while logging out", 500);
  }
};

const sendLink = async (req, res) => {
  try{
    const link = process.env.LINK;
    const emailID = req.body.emailID;
    const userData = await user.findOne({ emailID: emailID });
    if(userData) {
      sendmail(
        userData.emailID,
        "Foget password link in fintrak",
        ` <p> Hello </p><strong> ${userData.userName}, </strong> </br>
          <p> To change password <a href="${link}/change/${userData.emailID}">click here</a></p>
          <p> Thank You!!</p>`
      );
    }
  } catch(err){
    console.log(err.message);
  }
}

const forgetView = async (req, res) => {
  res.render('forgetPage');
}

const changePasswordView = async (req, res) => {
  const emailID = req.params.emailID;
  res.render("changePassword", {emailID: emailID});
}

const changePassword = async (req, res) => {
  try{
    const emailID = req.body.emailID;
    let password = await bcrypt.hash(req.body.password, 10);
    const userData = await user.findOne({ emailID: emailID });
    const updateDetails = await user.findByIdAndUpdate(userData._id, {
      password : password,
    });
    res.render("login", {message: 'Password changed successfully'});
  } catch(err){
    console.log(err.message);
    res.render("login", {message: 'Password has not been updated'});
  }
}


module.exports = {
  login,
  register,
  logout,
  loginView,
  viewProfile,
  forgetView,
  sendLink,
  changePassword,
  changePasswordView,
};

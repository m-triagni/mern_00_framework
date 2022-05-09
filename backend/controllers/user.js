const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

const User = require('@myproject/models/user')
const {sendEmailVerification, sendEmailPasswordForget} = require('@myproject/utils/email/emailService');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_ACCOUNT_ACTIVATION, {
    expiresIn: process.env.JWT_EXPIRED,
  })
}

// @desc    Register new user
// @route   API_Register
// @access  Public
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const username = slugify(name); 

  console.table({ name, email, password });
 
  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(process.env.APPLICATION_ERROR_CODE)
    throw new Error('User already exists')
  }
 
    //if not exits, generate token with user name, email and password
    const token = generateToken({name, email, password})

    //send email
    sendEmailVerification(email, token )
 
  // Create user
  const user = await User.create({
    name,
    username,
    email,
    password,
  })

  if (user) {
    res.status(process.env.APPLICATION_SUCCESS_CODE).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      token: token
    })
  } else {
    res.status(process.env.APPLICATION_ERROR_CODE)
    throw new Error('Invalid user data')
  }
})

// @desc    Activate registerd user
// @route   POST /api/users/activate
// @access  Public
exports.activate = asyncHandler(async (req, res) => {
    const {token} = req.body;
  
    //verify token.
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, async (error, decodedMsg) => {

      if(error) {
            res.status(process.env.APPLICATION_ERROR_CODE)
            throw new Error('Expired link. Try again') 
        }
        
        //get name, email and password from token.
        const {name, email, password} = jwt.decode(token)
 

        //check if user with that email is existed
        await User.findOneAndUpdate(email, {isEmailVerified: true} , {new: true }, (error, updatedUser) => {
          console.log(updatedUser);

          res.status(process.env.APPLICATION_SUCCESS_CODE).json(updatedUser) 
        })
 
    })
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
 
  // Check for user email
  const user = await User.findOne({ email })

  //authenticate the password
  if(!user.authenticate(password)) {
    res.status(process.env.APPLICATION_ERROR_CODE)
    throw new Error('Invalid credentials')
  }
  else {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  }
 
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
exports.getMe = asyncHandler(async (req, res) => {
  res.status(process.env.APPLICATION_SUCCESS_CODE).json(req.user)
})

/**
 * forgetPassword : create email for forget password 
 * @param {json} req : request object.
 * @param {json} res : response object.
 * @param {function} next : next function
 * @return {json} JSON user data or error message
 */
 exports.forgetPassword = asyncHandler(async (req, res) => {
 
  //get email 
  const {email} = req.body;

  //check if user exists with that email
  User.findOne({email}).exec((err, user) => {
      if(err || !user) {
        res.status(process.env.APPLICATION_ERROR_CODE)
        throw new Error('User with that email does not exists') 
      }

      //generate token
      const token = jwt.sign({name: user.name}, process.env.JWT_RESET_PASSWORD, {expiresIn: '60m'})
  
      //update DB resetPasswordLink with token
      return user.updateOne({resetPasswordLink: token}, (err, success) => {
          if(err) {
              return res.status(process.env.APPLICATION_ERROR_CODE).json({
                  error: 'Reset password is failed. Try later.'
              })
          }

          //send email
          sendEmailPasswordForget(email, token )

          res.json({message: `Email link password is sent to ${email}`})

      })
  })
})

/**
* resetPassword : update user with new password
* @param {json} req : request object.
* @param {json} res : response object.
* @param {function} next : next function
* @return {json} JSON user data or error message
*/
exports.resetPassword = asyncHandler(async (req, res) => {

  //get password link and new password
  const {resetPasswordLink, newPassword} = req.body;

  if(resetPasswordLink) {

      //validate token
      jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, (err, decodedMsg) => {
          if(err) { 
            res.status(process.env.APPLICATION_ERROR_CODE)
            throw new Error('Token is expired. Try again later.')  
          }
      });

      //check if token is exists
      User.findOne({resetPasswordLink}).exec((err, user) => {
          if(err || !user) {
              res.status(process.env.APPLICATION_ERROR_CODE)
              throw new Error('Password reset failed. Try again later.')   
          }

          console.log('newPassword: ', newPassword)

          //update new password
          const updatedField = {
              password: newPassword,
              resetPasswordLink: '',
          }
          
          //update user with new password
          user = lodash.extend(user, updatedField );

          //save updated user
          user.save((err, result) => {
              if(err) {
                res.status(process.env.APPLICATION_ERROR_CODE)
                throw new Error('Saving your new password is failed. Try again later.') 
              }

              //return message
              return res.json({
                  message: 'Reset password is success.'
              })
          })
      })
  }
})
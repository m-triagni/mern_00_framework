/**
 * It contains routes for authentication
 */
const express = require('express')
const router = express.Router()

const {register, activate, login, forgetPassword, resetPassword, getMe} = require('@myproject/controllers/user')
const {registrationValidator, userLoginValidator, forgetPasswordValidator, resetPasswordValidator} = require('@myproject/validators/user')
const {runValidation} = require('@myproject/validators/index')

const {listAPI} = require('@myproject/configs/listAPI')
  
router.get(`${listAPI.API_User_Me}`, )
router.post(`${listAPI.API_User_Register}`, registrationValidator, runValidation,  register)
router.post(`${listAPI.API_User_Activate}`,   activate)
router.post(`${listAPI.API_User_Login}`, userLoginValidator, runValidation,  login)
router.put(`${listAPI.API_User_ForgetPassword}`, forgetPasswordValidator, runValidation,  forgetPassword)
router.put(`${listAPI.API_User_ResetPassword}`, resetPasswordValidator, runValidation,  resetPassword)

module.exports = router 

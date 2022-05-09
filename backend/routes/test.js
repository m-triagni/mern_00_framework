const express = require('express')
const router = express.Router()

const {test, testClientURL} = require('@myproject/controllers/test')
const {listAPI} = require('@myproject/configs/listAPI')
 
router.get(`${listAPI.API_Test}`,  test)
router.get(`${listAPI.API_Test_ClientURL}`,  testClientURL)

module.exports = router 

const axios = require( 'axios');

const {listAPI} = require('configs/listAPI')

const user = {
    name : "Agni",
    password: "123456",
    email: "m.triagni.dev@gmail.com"
}

/*
Test User Registration
*/

//console.table({name, email, password})
async function testUserRegistration () {
    const response = await axios.post(`${API}${listAPI.API_User_Register}`,user)
    const userDB = response.data;

    console.log(userDB);
}

testUserRegistration()

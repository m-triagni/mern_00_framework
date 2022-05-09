const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

/*
===============================================================================
	SETUP .env
===============================================================================
*/
require('dotenv').config();

/*
===============================================================================
	SETUP module alias (to use @myproject on require)
===============================================================================
*/
require('module-alias/register');

/*
===============================================================================
	SETUP app for server
===============================================================================
*/
//setup app var
const app = express();
app.use(bodyParser.json({limit: '5mb', type: 'application/json'}));

//app.use(cors()) //apply this if API is allowed for all origin
app.use(cors({ origin: process.env.CLIENT_URL }))
console.log(`process.env.CLIENT_URL : ${process.env.CLIENT_URL}`);

// start open the port to listen
const port = process.env.PORT ;
app.listen(port, () => console.log(`API is running on port ${port}.`));

//setup errorhandler middleware
//app.use(errorHandler)
 
/*
===============================================================================
	SETUP DB
===============================================================================
*/

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true  })
.then( () => console.log('DB is connected'))
.catch( err => console.log(err) )

/*
===============================================================================
	SETUP Routes
===============================================================================
*/
const { listAPI } = require('configs/listAPI')

const userRoutes = require('@myproject/routes/user');
app.use(listAPI.API, userRoutes);

const testRoutes = require('@myproject/routes/test');
app.use(listAPI.API, testRoutes);

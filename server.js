// load enviroment variables
require('dotenv').config();


//grab our depenceies
const express = require('express');
app = express();
port = process.env.PORT || 3000;
expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose');

//configure our app =============================
//tell express where to look for static assets
app.use(express.static(__dirname + '/public'));


//set ejs as our templating==========================
app.set('view engine', 'ejs');
app.use(expressLayouts);

//connect to our database===================
mongoose.connect('mongodb://victor:root@ds057176.mlab.com:57176/first');

//set the routes ==================================
app.use(require('./app/routes'));

app.listen(port, () => {
  console.log(`apspListening on http://localhost:${port}`)
})

const express = require('express');
app = express();
port = process.env.PORT || 3000;
expressLayouts = require('express-ejs-layouts')


//configure our app
//tell express where to look for static assets
app.use(express.static(__dirname + '/public'));


//set ejs as our templating
app.set('view engine', 'ejs');
app.use(expressLayouts);


app.use(require('./app/routes'));

app.listen(port, () => {
  console.log(`apspListening on http://localhost:${port}`)
})

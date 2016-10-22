//create a new express router
const express = require('express');
router = express.Router();
mainController = require('./controllers/main.controller')
const eventController = require('./controllers/events.controller');
//export router
module.exports = router;

//define routes
router.get('/', mainController.showHome)
router.get('/events',       eventController.showEvents)
router.get('/events/:slug', eventController.showSingle)

//create vents


//edit events


//delete events


const express = require('express');
const { landingPage } = require('../controllers/Home_Controller');
const {addHabit, removeHabit, details, updateStatus} = require('../controllers/Habit_Controller');

const routers = express.Router();

routers.get('/',landingPage);

//user router link which is nested inside the router
routers.use('/user',require('./user'));

//hit the addHabit
routers.post('/addHabit',addHabit);

//hit the removeHabit
routers.get('/delete/:id',removeHabit);

//hit the details
routers.get('/details/:id', details);

//hit the updateStatus
routers.post("/update/:habitId/:id", updateStatus);

module.exports = routers;


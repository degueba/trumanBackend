const express = require('express');


const routes = express.Router();

const UserController = require('../src/controllers/UserController');
const AvengerController = require('../src/controllers/AvengerController');
const SurveyController = require('../src/controllers/SurveyController');
const EmailController = require('../src/controllers/EmailController');

// Users
routes.get('/users', UserController.select)
routes.post('/users', UserController.create)
routes.post('/users/login', UserController.login)

// Avengers
routes.get('/avengers', AvengerController.select)
routes.post('/avengers', AvengerController.create)

// Surveys
routes.post('/surveys', SurveyController.create)

// Email
routes.post('/email/abandoned', EmailController.abandoned);

module.exports = routes;
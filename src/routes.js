const express = require('express');


const routes = express.Router();

const UserController = require('../src/controllers/UserController');

routes.get('/users', UserController.select)
routes.post('/users', UserController.create)
routes.post('/users/login', UserController.login)


const AvengerController = require('../src/controllers/AvengerController');

routes.post('/avengers', AvengerController.create)


const SurveyController = require('../src/controllers/SurveyController');

routes.post('/surveys', SurveyController.create)


const EmailController = require('../src/controllers/EmailController');

routes.post('/email/abandoned', EmailController.abandoned);

module.exports = routes;
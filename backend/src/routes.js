const express = require('express');

const sessionController = require('./controllers/sessionController');
const employeeController = require('./controllers/employeeController');
const routes = express.Router();

routes.post('/sessions', sessionController.create);
routes.post('/employee', employeeController.create);

module.exports = routes;
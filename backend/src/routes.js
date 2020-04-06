const express = require('express');

const sessionController = require('./controllers/sessionController');
const employeeController = require('./controllers/employeeController');
const patientsController = require('./controllers/patientsController');
const routes = express.Router();


routes.post('/sessions', sessionController.create);
routes.post('/employee', employeeController.create);
routes.post('/patients', patientsController.create);

module.exports = routes;
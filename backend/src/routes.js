const express = require('express');

const sessionController = require('./controllers/sessionController');
const employeeController = require('./controllers/employeeController');
const patientsController = require('./controllers/patientsController');
const schedulleController = require('./controllers/schedulleController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.post('/employee', employeeController.create);
routes.get('/employee', employeeController.index);

routes.post('/patients', patientsController.create);
routes.get('/patients', patientsController.index);

routes.post('/schedulle', schedulleController.create);
routes.get('/schedulle', schedulleController.index);

module.exports = routes;
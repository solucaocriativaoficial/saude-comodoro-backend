const express = require('express')
const Router = express.Router();

const PhoneController = require('./controllers/PhoneController')
const PostosController = require('./controllers/PostosController')
const DicasController = require('./controllers/DicasController')
const DecressController = require('./controllers/DecressController')
const CasesController = require('./controllers/CasesController')
const SymptomsController = require('./controllers/SymptomsController')
const PersonController = require('./controllers/PersonController')

Router.get('/phone', PhoneController.findAll)
Router.get('/phone/1/:id', PhoneController.findId)
Router.post('/phone/add', PhoneController.insert)
Router.put('/phone/:id', PhoneController.update)
Router.delete('/phone/:id', PhoneController.delete)

Router.get('/postos', PostosController.findAll)
Router.get('/postos/1/:id', PostosController.findId)
Router.post('/postos/add', PostosController.insert)
Router.put('/postos/:id', PostosController.update)
Router.delete('/postos/:id', PostosController.delete)

Router.get('/dicas', DicasController.findAll)
Router.get('/dicas/1/:id', DicasController.findById)
Router.post('/dicas/add', DicasController.insert)
Router.put('/dicas/:id', DicasController.update)
Router.delete('/dicas/:id', DicasController.delete)

Router.get('/decress', DecressController.findAll)
Router.get('/decress/1/:id', DecressController.findId)
Router.post('/decress/add', DecressController.insert)
Router.put('/decress/:id', DecressController.update)
Router.delete('/decress/:id', DecressController.delete)

Router.get('/cases', CasesController.findAll)
Router.get('/cases/1/:id', CasesController.findId)
Router.post('/cases/add', CasesController.insert)
Router.put('/cases/:id', CasesController.update)
Router.delete('/cases/:id', CasesController.delete)

Router.get('/symptoms', SymptomsController.findAll)
Router.get('/symptoms/1/:id', SymptomsController.findId)
Router.post('/symptoms/add', SymptomsController.insert)
Router.put('/symptoms/:id', SymptomsController.update)
Router.delete('/symptoms/:id', SymptomsController.delete)

Router.get('/person', PersonController.findAll)
Router.get('/person/1/:id', PersonController.findId)
Router.post('/person/add', PersonController.insert)
Router.put('/person/:id', PersonController.update)
Router.delete('/person/:id', PersonController.delete)
Router.post('/auth', PersonController.auth)

module.exports = Router
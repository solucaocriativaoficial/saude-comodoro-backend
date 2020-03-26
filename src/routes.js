const express = require('express')
const Router = express.Router();

const PhoneController = require('./controllers/PhoneController')
const PostosController = require('./controllers/PostosController')
const DicasController = require('./controllers/DicasController')
const DecressController = require('./controllers/DecressController')
const CasesController = require('./controllers/CasesController')
const SymptomsController = require('./controllers/SymptomsController')

Router.get('/phone', PhoneController.findAll)
Router.post('/phone/add', PhoneController.insert)
Router.put('/phone/:id', PhoneController.update)
Router.delete('/phone/:id', PhoneController.delete)

Router.get('/postos', PostosController.findAll)
Router.post('/postos/add', PostosController.insert)
Router.put('/postos/:id', PostosController.update)
Router.delete('/postos/:id', PostosController.delete)

Router.get('/dicas', DicasController.findAll)
Router.get('/dicas/1/:id', DicasController.findById)
Router.post('/dicas/add', DicasController.insert)
Router.put('/dicas/:id', DicasController.update)
Router.delete('/dicas/:id', DicasController.delete)

Router.get('/decress', DecressController.findAll)
Router.post('/decress/add', DecressController.insert)
Router.put('/decress/:id', DecressController.update)
Router.delete('/decress/:id', DecressController.delete)

Router.get('/cases', CasesController.findAll)
Router.post('/cases/add', CasesController.insert)
Router.put('/cases/:id', CasesController.update)
Router.delete('/cases/:id', CasesController.delete)

Router.get('/symptoms', SymptomsController.findAll)
Router.post('/symptoms/add', SymptomsController.insert)
Router.put('/symptoms/:id', SymptomsController.update)
Router.delete('/symptoms/:id', SymptomsController.delete)

module.exports = Router
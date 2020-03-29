require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const Router = require('./routes')
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(Router)

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor está funcionando!")
})
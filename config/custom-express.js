const express = require('express')
const consign = require('consign')  /*Serve para incluir as "rotas" */
module.exports = () => {
    var app = express()
    consign().include('controllers').into(app)
    return app;
}
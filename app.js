const express = require('express')
const app = express()
const {getCategories} = require('./controllers/controller')

app.get('/api/categories', getCategories)

app.all('*', (req, res, next) => {
    res.status(404).send({msg: "Path not found"})
})

module.exports = app
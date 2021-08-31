const express = require('express')
const app = express()
const route = require('./route/route')

app.use(route)

app.listen(4000, () => {
    console.log('Server is here');
})

module.exports = app
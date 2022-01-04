const express = require('express')
const path = require('path')
const volleyball = require('volleyball');
const passport = require('passport')
const session = require('express-session')

const app = express()

// logging middleware
// Only use logging middleware when not running tests
const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({ debug }))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Session middleware
app.use(session({
  secret: 'This is not a very secure secret...',
  resave: false,
  saveUninitialized: false
}))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/auth',require('./auth'))
app.use('/api', require('./api')) // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app

'use strict';
// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const Comment = require('./model/comments')
const cors = require('cors')
const mongoose = require('mongoose')

// Create a new express application named 'app'
const app = express()

// Create the router instance
const router = express.Router()

// Set backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000

// Access my Mongo DB
const mongoDbUrl = getDbUrl()
mongoose.connect(mongoDbUrl, { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Configure the bodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

// Configure the CORs middleware
app.use(cors())

// Add the /comments route to the /api router
router.route('/comments')
  // Retrieve all comments from the DB
  .get((req, res) => {
    // Look at Comment Schema
    Comment.find((err, comments) => {
      if (err) {
        console.log('failed to find comments')
        res.send(err)
      }
      // Respond with a json object of DB comments.
      console.log(`successfully found ${comments.length} comments`)
      res.json(comments)
    })
  })

  // Post a new comment to the DB
  .post((req, res) => {
    var comment = new Comment()
    comment.email = req.body.email
    comment.message = req.body.message

    comment.save(function(err) {
      if (err) {
        console.log('failed to save comments')
        res.send(err)
      }
      console.log('successfully saved comment')
      res.json({ message: 'Comment successfully added!' })
    })
  })
  
// Configure app to use the router
app.use('/api/', router)
// Configure the server to listen on the port defiend by the port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`))

function getDbUrl() {
  const dbUser = 'dbEfalk';
  const dbPass = 'LxAqeDaQigTqYdbv';
  const dbName = 'commentfeed';
  return  'mongodb+srv://' +
          dbUser + ':' +
          dbPass + '@cluster0.kf1uw.mongodb.net/' +
          dbName + '?retryWrites=true&w=majority'
}

const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
  console.log(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  console.log('THIS IS THE REQ',req.body);
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const phone = req.body.phone;
  const email = req.body.email;
  const dateOfBirth = req.body.dob;

  const queryText = `INSERT INTO "user" (username, password, first_name, last_name, phone, email, dob)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
  pool
    .query(queryText, [username, password, firstName, lastName, phone, email, dateOfBirth])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.put('/', rejectUnauthenticated,  (req, res) => {
  console.log('Checking put, id=', req.user.id, 'body=', req.body)
  const queryText = `UPDATE "user" SET username=$1, first_name=$2, last_name=$3, phone=$4, email=$5, dob=$6  WHERE id=$7;`;

  pool.query(queryText, [req.body.username, req.body.first_name,req.body.last_name,req.body.phone,req.body.email, req.body.dob, req.user.id])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error updating user info`, error);
      res.sendStatus(500);
    });
});

module.exports = router;

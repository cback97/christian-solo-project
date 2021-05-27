const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const user_id = req.user.id;
  const queryText = `SELECT first_name, last_name, gad_form_score, phq_form_score FROM user
                      JOIN form_data on user.id = form_data.user_id
                      WHERE form_data.user_id = ${user_id};`;
                      
  pool.query(queryText)
    .then( result => {
      res.send(result.rows);
    })
    .catch( error => {
      console.log('Error is GET items', error);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
 router.post('/', (req, res) => {
  
  const user_id = 1;
  const query  = `INSERT INTO "form_data" ("gad_form_score", "phq_form_score", "reflections","user_id")
      VALUES ($1, $2, $3, $4)`;
  pool.query(query, [req.body.gad, req.body.phq, req.body.reflection, user_id])
    .then(result => {
      console.log('item object POST', result.rows);
      res.sendStatus(201);
    }).catch (error => {
      console.log(error);
      res.sendStatus(500)
    })
});

module.exports = router;

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
  
  const user_id = req.user.id;
  const queryText = `SELECT form_data.id, date_submitted, first_name, last_name, gad_form_score, phq_form_score, reflections FROM "user"
                      JOIN form_data on "user".id = form_data.user_id
                      WHERE form_data.user_id = $1;`;
                      
  pool
  .query(queryText,[user_id])
  .then((result) => res.send(result.rows))
  .catch((error) => {
    console.log('Error getting user info: ', error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
 router.post('/',rejectUnauthenticated, (req, res) => {
  
  const user_id = req.user.id;
  const query  = `INSERT INTO "form_data" ("date_submitted","gad_form_score", "phq_form_score", "reflections", "user_id")
      VALUES ($1, $2, $3, $4, $5)`;

  pool
  .query(query, [req.body.dateSubmitted, req.body.gad, req.body.phq, req.body.reflection, user_id])
    .then(result => {
      console.log('item object POST', result.rows);
      res.sendStatus(201);
    }).catch (error => {
      console.log(error);
      res.sendStatus(500)
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  let sqlText = `DELETE FROM form_data WHERE id=$1`;
  pool
    .query(sqlText, [id])
    .then((result) => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log('Error on server deleting scores: ', error);
      res.sendStatus(500);
    });
})


module.exports = router;

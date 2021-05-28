const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
 router.get('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  console.log(id);
  let sqlText = `SELECT date_submitted, gad_form_score, phq_form_score, reflections FROM form_data
                      WHERE form_data.id = $1`;
  pool
    .query(sqlText, [id])
    .then((result) => res.send(result.rows))
    .catch((error) => {
      console.log(`Error getting info for id ${id}: `, error);
      res.sendStatus(500);
    });
});

module.exports = router;
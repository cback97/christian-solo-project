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

  const queryText = `SELECT * FROM "user";`;
                      
  pool
  .query(queryText)
  .then((result) => res.send(result.rows))
  .catch((error) => {
    console.log('Error getting patients: ', error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */



module.exports = router;
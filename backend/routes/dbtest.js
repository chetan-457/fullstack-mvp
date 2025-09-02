// backend/routes/dbtest.js
const express = require('express');
const pool = require('../db');
const router = express.Router();


router.get('/dbtest', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

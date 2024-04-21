const express = require('express');
const router = express.Router();
const ccController = require('../controllers/creativeChallengesController');

// Error handling middleware
const handleError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({ error: err.message });
};

// Define routes
router.get('/', ccController.getAllCC);
router.post('/', ccController.createCC);
router.delete('/', ccController.deleteCC);

// Use error handling middleware
router.use(handleError);

module.exports = router;

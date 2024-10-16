const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getCurrentUser
} = require('../controllers/authController');
// const auth = require('../middleware/auth');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', login);

// @route   GET /api/auth/current
// @desc    Get current user
// @access  Private
// router.get('/current', auth, getCurrentUser);
router.get('/current', getCurrentUser);


module.exports = router;
const express = require('express');
const { register, login } = require('../controllers/authController');
const { auth, adminAuth } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);

router.post('/login', login);

// Route cho admin
router.get('/admin', auth, adminAuth, (req, res) => {
  res.json({ message: 'Welcome Admin' });
});

// Route cho user
router.get('/user', auth, (req, res) => {
  res.json({ message: 'Welcome User' });
});

module.exports = router;

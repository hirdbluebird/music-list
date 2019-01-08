const express = require('express');
const passport = require('passport');
const User = require('../../models/user.js');

const router = express.Router();

// POST to /register
router.post('/register', (req, res) => {
  // Create a user object to save, using values from incoming JSON
  const newUser = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  // Save via Passports's "register" method, the user
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      return res.send(JSON.stringify({ error: err }));
    }
    return res.send(JSON.stringify(user));
  });
});

module.exports = router;

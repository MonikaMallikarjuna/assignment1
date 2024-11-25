

const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.get('/signup', userController.showSignupForm);

router.post('/signup', userController.signupUser);

module.exports = router;

const router = require('express').Router();
const { 
    registerUser, 
    loginUser 
} = require('../controllers/userController');

router.route('/signup')
      .get()
      .post(registerUser);

router.route('/login')
      .get()
      .post(loginUser);

router.route('/logout')
      .get();

module.exports = router;
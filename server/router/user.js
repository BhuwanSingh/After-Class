const router = require('express').Router();
const userController = require('../controllers/user');
const authenticate = require('../middleware/authenticate');


router
  .post('/register', userController.register)
  .post('/signin', userController.signIn)
  .post('/signout' , userController.signOut )
  .get('/:email',authenticate,userController.search)
  .get('/:serach', userController.find);

module.exports = router;

var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');
let authController = require('../controllers/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin', authController.signin);
router.get('/list', usersController.list);
router.post('/create', usersController.create);
router.get('/get/:userID', usersController.userGet, usersController.userByID);
router.put('/edit/:userID', authController.signin,usersController.update);
router.delete('/delete/:userID', usersController.remove);

module.exports = router;

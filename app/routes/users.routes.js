const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller.js');

router.get('/login', userController.index);
router.get('/', userController.index);


module.exports = router;
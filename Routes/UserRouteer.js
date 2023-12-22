const express        = require('express');
const UserController = require('../Controller/UserController')
const UserRouter     = express.Router();

UserRouter.get('/random', UserController.getRandomUser);
UserRouter.get('/all', UserController.getAllUser);
UserRouter.post('/save', UserController.saveUser);
UserRouter.put('/update', UserController.updateUser);
UserRouter.put('/delete', UserController.deleteUser);

module.exports = UserRouter;
const UserService = require('../Service/UserService');

const getRandomUser = async (req, res) => {
    const user = await UserService.getRandomUser();
    res.json(user);
};

const getAllUser = async (req, res) => {
    const users = await UserService.getAllUser();
    res.json(users);
};

const saveUser = async (req, res) => {
    await UserService.saveUser(req.body);
    res.json({
        'response': 'Operation performed'
    });
};

const updateUser = async (req, res) => {
    await UserService.updateUser(req.body, req.params['id']);
    res.json({
        'response': 'Operation performed'
    })
};

const deleteUser = async (req, res) => {
    await UserService.deleteUser(req.params['id']);
    res.json({
        'response': 'Operation performed'
    })
};

module.exports = UserController = {
    getAllUser,
    getRandomUser,
    updateUser,
    deleteUser,
    saveUser
};

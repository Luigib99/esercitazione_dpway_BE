const  User  = require('../model/User');

//FINDALL
const findAllUsers = async () => {
    return await User.findAll();
};

module.exports = {
    findAllUsers
};

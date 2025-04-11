const  User  = require('../model/User');

//READALL
const readAll = async () => {
    return await User.findAll();
};

module.exports = {
    readAll
};

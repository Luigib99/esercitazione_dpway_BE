const userRepository = require('../repository/userRepository');

//READ ALL

const readAllUsers = async ()=> {
    return await userRepository.findAllUsers();
}

module.exports = {
    readAllUsers,
};

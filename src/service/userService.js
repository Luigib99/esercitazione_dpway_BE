const userRepository = require('../repository/userRepository');

//READ ALL

const readAll = async ()=> {
    return await userRepository.readAll();
}

module.exports = {
    readAll,
};

const { User } = require('../model/User');
const { UserPassword } = require('../model/UserPassword');
const { Op } = require('sequelize');

// Trova utente per username o email
const findByUsernameOrEmail = async (username, email) => {
    return User.findOne({
        where: {
            [Op.or]: [
                { username },
                { email }
            ]
        }
    });
};

// CEATE
const createUserWithPasswordAndRole = async (username, email, hashedPassword) => {
    const transaction = await User.sequelize.transaction();
    try {
        const user = await User.create({
            username,
            email,
            role: 'user',  // Puoi adattare il ruolo come desideri
        }, { transaction });

        await UserPassword.create({
            userId: user.id,
            password: hashedPassword,
        }, { transaction });

        await transaction.commit();
        return user;
    } catch (error) {
        await transaction.rollback();
        throw new Error('Errore nella creazione dell\'utente: ' + error.message);
    }
};

//FINDALL
const findAllUsers = async () => {
    return await User.findAll();
};

module.exports = {
    findByUsernameOrEmail,
    createUserWithPasswordAndRole,
    findAllUsers
};

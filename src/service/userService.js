const { User } = require('../model/User');
const { Role } = require('../model/Role');  // Importa il modello Role
const { UserPassword } = require('../model/UserPassword');
const userRepository = require('../repository/userRepository');
const bcrypt = require('bcrypt');
const validator = require('validator');

//CREATE
const createUser = async (userData) => {
    const { username, email, password, role } = userData;

    if (!username || !email || !password || !role) {
        throw new Error('Tutti i campi sono obbligatori');
    }

    // Validazione username con regex
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
    if (!usernameRegex.test(username)) {
        throw new Error('Username non valido. Deve contenere solo lettere, numeri e underscore, e avere una lunghezza tra 4 e 20 caratteri');
    }

    // Validazione email
    if (!validator.isEmail(email)) {
        throw new Error('Email non valida');
    }

    // Verifica se l'utente esiste già (username o email)
    const existingUser = await User.findOne({ where: { [Op.or]: [{ username }, { email }] } });
    if (existingUser) {
        throw new Error('Username o email già in uso');
    }

    // Criptazione della password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea il ruolo (potrebbe essere un ruolo esistente)
    const userRole = await Role.findOne({ where: { name: role } });
    if (!userRole) {
        throw new Error('Ruolo non valido');
    }

    // Creazione dell'utente
    const newUser = await User.create({
        username,
        email,
        roleId: userRole.id,  // Associa l'ID del ruolo all'utente
    });

    // Crea la password dell'utente
    await UserPassword.create({
        userId: newUser.id,
        password: hashedPassword,
    });

    return newUser;
};

//READ ALL

const readAllUsers = async ()=> {
    return await userRepository.findAllUsers();
}

module.exports = {
    createUser,
    readAllUsers,
};

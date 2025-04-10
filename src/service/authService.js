const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

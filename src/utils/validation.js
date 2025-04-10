const usernameRegex = /^[a-zA-Z0-9._]{4,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateUsername(username) {
    return usernameRegex.test(username);
}

function validateEmail(email) {
    return emailRegex.test(email);
}

module.exports = {
    validateUsername,
    validateEmail
};

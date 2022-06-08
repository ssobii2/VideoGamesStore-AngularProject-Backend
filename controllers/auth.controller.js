function login(req, res) {
    const correctUser = 'admin@gmail.com';
    const correctPassword = 'admin1234';

    const success = req.body.username === correctUser && req.body.password === correctPassword;

    let response;

    if (success) {
        const user = {
            firstName: 'Pro',
            lastName: 'Gamer'
        };

        response = {
            user: user,
            validationError: false
        };
    } else {
        response = {
            validationError: true
        };
    }

    res.json(response);
}

function logout(req, res) {
    res.json({data: 'Logged out'});
}

module.exports = {
    login,
    logout
}
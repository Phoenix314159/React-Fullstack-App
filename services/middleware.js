const cookieSession = require('cookie-session'),
    passport = require('passport'),
    config = require('../config'),
    bodyParser = require('body-parser');

module.exports = app => {
    app.use(
        cookieSession({
            maxAge: config.cookieAge,
            keys: [config.cookieKey]
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(bodyParser.json());
}


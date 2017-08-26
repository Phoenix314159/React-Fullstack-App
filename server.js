const config = require('./config'),
    express = require('express'),
    cookieSession = require('cookie-session'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect(config.db);

app.use(
    cookieSession({
        maxAge: config.cookieAge,
        keys: [config.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./models/user'); // has to be required first so passport can access users model
require('./services/passport');
require('./routes/auth')(app);
require('./routes/home')(app);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});
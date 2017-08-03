const port = 3072,
    express = require('express'),
    passport = require('passport'),
    googleStrategy = require('passport-google-oauth20').Strategy,
    config = require('./config'),
    app = express();

passport.use(new googleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret
}));


app.get('/', (req, res) => {
    res.status(200).send({ bye: 'buddy'})
});


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
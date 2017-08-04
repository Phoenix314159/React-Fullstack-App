const port = 3072,
    express = require('express'),
    passport = require('passport'),
    googleStrategy = require('passport-google-oauth20').Strategy,
    config = require('./config'),
    app = express();

passport.use(new googleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile', profile);
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google'));


app.get('/', (req, res) => {
    res.status(200).send({ bye: 'buddy'})
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
const  passport = require('passport'),
    googleStrategy = require('passport-google-oauth20').Strategy,
    config = require('../config/config');

passport.use(new googleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile', profile);
}));
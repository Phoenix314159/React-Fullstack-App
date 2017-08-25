const passport = require('passport'),
    googleStrategy = require('passport-google-oauth20').Strategy,
    config = require('../config'),
    mongoose = require('mongoose'),
    User = mongoose.model('users');

passport.use(new googleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile) => {
    console.log('profile : ', profile)
    User.findOne({
        googleId: profile.id
    }).then((existingUser) => {
        if(existingUser){ // already have a record with given profile id

        }else {  //don't have record with user id, create new record
            new User({
                googleId: profile.id,
                name: profile.name.givenName,
                emailAddress: profile.emails[0].value
            }).save();
        }
    })

}));
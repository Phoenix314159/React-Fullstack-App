const port = process.env.PORT || 3072;

module.exports = {
    port: port,
    db: 'mongodb://james:password@ds019678.mlab.com:19678/emaily-dev',
    googleClientID: '613050138892-9g0qf9pb2715nuridavcoh9168665gt8.apps.googleusercontent.com',
    googleClientSecret: 'MkWh8xlEAdwSCw_YoAWAz4tQ',
    cookieKey: 'ouiqwhegfoujyg*^%$*^%#&%^$#kjhgtyfiytf',
    cookieAge: 2592000000,
    redirectUrl: `https://feedback-app123.herokuapp.com/`
}

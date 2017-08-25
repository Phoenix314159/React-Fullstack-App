const config = require('./config'),
    express = require('express'),
    app = express(),
    mongoose = require('mongoose');

mongoose.connect(config.db)

require('./models/user'); // has to be required first so passport can access users model
require('./services/passport');
require('./routes/authRoutes')(app);
require('./routes/home')(app);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});
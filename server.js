const config = require('./config/config'),
    express = require('express'),
    app = express();
require('./services/passport');
require('./routes/authRoutes')(app);
require('./routes/home')(app);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});
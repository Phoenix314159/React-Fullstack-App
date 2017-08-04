const port = 3072,
    express = require('express'),
    app = express();
require('./services/passport');
require('./routes/authRoutes')(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
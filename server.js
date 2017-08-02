const port = 5000,
    express = require('express'),
    app = express();



app.get('/', (req, res) => {
    res.send({ hi: 'there'})
});


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
const port = 3072,
    express = require('express'),
    app = express();



app.get('/', (req, res) => {
    res.status(200).send({ bye: 'buddy'})
});


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
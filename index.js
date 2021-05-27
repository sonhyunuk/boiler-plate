const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
mongoose.connect(`mongodb+srv://root:root@boilerplate.vcg1k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
    .then(() => console.log(`MongoDb Connected`))
    .then(err => console.log(err))


app.get(`/`, (req, res) => res.send(`hello world`))
app.listen(port, () => console.log(`example app listening on port ${port}`));
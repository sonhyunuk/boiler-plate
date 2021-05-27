const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/user');
const config = require('./config/key');


mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
    .then(() => console.log(`MongoDb Connected`))
    .then(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(`/`, (req, res) => res.send(`hello world`))

app.post(`/register`, (req, res) => {
    /* 회원가입 할때 필요한 정보를 client 에서 가져오면
      그것들을 db에 넣어줌
    */
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })


})

app.listen(port, () => console.log(`example app listening on port ${port}`));
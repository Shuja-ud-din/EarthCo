const express = require('express')
const server = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');

server.use(bodyParser.json());
server.use(cors())

const dbConnector = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/EarthCo');
}

const userSchema = new mongoose.Schema({
    fullName: String,
    userName: String,
    email: String,
    password: String
})

dbConnector();

const Users = mongoose.model('Users', userSchema);

server.get('/Users', async (req, res) => {
    const docs = await Users.find({});
    res.json(docs);
})

server.post('/AddUser', async (req, res) => {
    const data = req.body;
    const user = new Users();
    user.fullName = data.fullName;
    user.userName = data.userName;
    user.email = data.email;
    user.password = data.password;

    const doc = await user.save();

    res.json(doc)
})

server.post('/AddCustomer', async (req, res) => {
    console.log(req.body);
})

server.listen(8001)
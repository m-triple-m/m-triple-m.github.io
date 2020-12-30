const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routers/userManager.js');
const parser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(parser.json());
app.use('/user', userRouter);

app.get('/home', (req, res) => {
    console.log('welcome to home');
    res.send('request processed');
})

app.listen(port, () => {
    console.log('express server started at port '+port);
});
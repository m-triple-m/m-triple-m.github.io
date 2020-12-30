const mongoose = require('mongoose');
const con_url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/MEANstack?retryWrites=true&w=majority";

mongoose.connect(con_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('connection established successfully!!');
})
.catch((error) => {
    console.error(error);
})

module.exports = mongoose;
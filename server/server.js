


// mongodb
require('./config/db');


const app = require('express')();
const PORT = process.env.PORT || 3000;

const UserRouter = require('./api/User');

// post from data 
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
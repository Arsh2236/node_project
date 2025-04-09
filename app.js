const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const userRoutes = require('./routes/users.js');
const app = express();
const rateLimit = require('express-rate-limit');
const swaggerUI  = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://arshs:Sidhuarsh36@arshdeep.7wr2i.mongodb.net/?retryWrites=true&w=majority&appName=ARSHDEEP/';

mongoose.connect(uri)
    .then( () => {
        console.log('Connected to MongoDB');
    })

    .catch(err => {
        console.log(`Error: ${err}`);
    })
//setup our view engine
app.set('view engine', 'ejs');
app.set('views', "./views");

//rate limiter
const fixedWindowLimiter = rateLimit({
 windowMs: 1 * 15 * 1000,
 max: 10,
 message: 'Too many requests.  Please try again later',
});

app.use('/api/docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));
app.use(fixedWindowLimiter);
app.use(express.static('public'));
app.use(userRoutes);


app.listen(PORT, ()=>{
    console.log(`Connected to port: ${PORT}`);
});
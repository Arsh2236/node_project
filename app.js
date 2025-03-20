const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//setup our view engine
app.set('view engine', 'ejs');
app.set('views', "./views");


app.use(express.static('public'));



app.listen(PORT, ()=>{
    console.log(`Connected to port: ${PORT}`);
});
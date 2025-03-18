// import the express package
const express = require('express');
require(`dotenv`).config();
const PORT = process.env.PORT;

// initialize a new express instance equal to the app object
const app = express();

//route handler that sends back a response
app.get(`/home`,(req, res) =>{
    res.send("Hello, World");

});
//roiute handler for a post request
app.post('/user/:id', (req, res) =>{
    const user_id = req.params.id;
  res.send('This is post response in RESTFUL style');
});

//Start our server, listening on part 3000
app.listen(PORT, () =>{
    console.log(`Connected on port ${PORT}`);
});
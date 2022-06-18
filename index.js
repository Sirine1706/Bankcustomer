// import section
const express = require('express') //we call the library of express
const app =express() // we call the express fct wthout download it to set up express server
const mongoose = require('mongoose');

// DB connection 
mongoose.connect('mongodb+srv://fatma:meftah@cluster0.w3okpht.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("connected",() => {
console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
console.log("mongodb failed with ",err);
});

// import routes
const StudentRoutes = require('./routes/student.routes')

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// midlleware routes
app.use("./students",StudentRoutes)
//server listening
const port = 2000
app.listen(port, () => {
     console.log(`example app listenig to port ${port}`)
    })
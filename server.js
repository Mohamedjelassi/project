const express = require("express");

const connect = require("./config/connectDB");








var cors = require('cors')


// Router
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoute");
const Client = require("./routes/clientRoute");
const Date = require("./routes/dateRoute");



//instantiation
const app = express();


app.use(express.urlencoded({limit: '50mb'}));

// middlewware

app.use(express.json({limit: '50mb'}));
app.use(cors())






// connect to DB
connect();

// Use route
app.use('/api/users', userRoutes)
app.use('/api/Cars', carRoutes)
app.use('/api/Client', Client)
app.use('/api/Date', Date)

//port
const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});

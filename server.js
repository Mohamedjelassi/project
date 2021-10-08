const express = require("express");
const connect = require("./config/connectDB");
var cors = require("cors");
const path = require("path");
// const bodyParser = require('body-parser');



// Router
const userRoutes = require("./routes/userRoutes");
const Client = require("./routes/clientRoute");
const Date = require("./routes/dateRoute");

const FileRoutes = require('./routes/file-upload-routes');
connect();
//instantiation
const app = express();

app.use(cors());

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// middlewware




// connect to DB


// Use route
app.use("/api/users", userRoutes);
app.use("/api/Client", Client);
app.use("/api/Date", Date);
app.use("/api/addCar", FileRoutes);


//port
const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});

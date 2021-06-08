import express from "express";
import mongoose from "mongoose";

import users from "./routes/users.js"
// import index from "./routes/indexRouter.js"

mongoose.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connection Successful!");
});

const app = express();

app.use(express.json());

// app.use('/', index);
app.use('/users', users);

app.listen(5000, () => {
    console.log("Server online");
});
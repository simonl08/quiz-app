import express from "express";
import mongoose from "mongoose";

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

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log("Server online");
});
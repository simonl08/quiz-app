import express from "express";
import mongoose from "mongoose";
import registerRouter from "./routes/register"
import loginRouter from "./routes/login"


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

app.use('/', registerRouter);
app.use('/', loginRouter);

app.listen(3000, () => {
    console.log("Server online");
});
import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.js";

const router = express.Router();

router.post("/login", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    User.findOne({ name }).then((user) => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                return res.status(200).json({ success: true });
            } else {
                return res.status(400).json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

router.post("/register", async (req, res) => {
    console.log("at the back end ");
    console.log(req.body);

    User.findOne({ name: req.body.name }).then((user) => {
        if (user) {
            return res.status(400).json({ name: "Username already exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) => res.json(user))
                        .catch((err) => console.log(err));
                });
            });
        }
    });
    // const hashedPassword = await bcrypt.hash(req.body.userPassword, 10);
    // const player = await Quizuser.find({ email: req.body.userEmail });
    // const password1 = req.body.userPassword;
    // const password2 = req.body.userPassword2;
    // if (password1 !== password2) {
    //     res.json({
    //         errorPasswords: 'Passwords Do Not Match',
    //     });
    // } else if (player.length > 0) {
    //     res.json({
    //         registration: false,
    //         errorPasswords: 'Sorry Email Or Password Is Incorrect ',
    //     });
    // } else {
    //     await Quizuser.create({
    //         name: req.body.userName,
    //         email: req.body.userEmail,
    //         password: hashedPassword,
    //     });
    //     res.json({
    //         registration: true,
    //         message: 'user was registered',
    //     });
    // }
});

export default router;

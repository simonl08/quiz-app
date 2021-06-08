import express from "express";
import bcrypt from "bcryptjs"
import User from "../models/user"

const router = express.Router();

router.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" })
        }
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                return res 
                .status(200)
                .json({success: true})
                // const payload = { id: user.id, name: user.name }
                // jwt.sign(payload, keys.secretOrKey, (err, token) => {
                //     res.json({ success: true, token: "Bearer " + token })
                // })
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" })
            }
        })
    })
})

router.post('/register', async (req, res) => {
    console.log('at the back end ');
    console.log(req.body);

    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" })
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser
                        .save()
                        .then((user) => res.json(user))
                        .catch((err) => console.log(err))
                })
            })
        }
    })
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
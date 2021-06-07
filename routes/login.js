import express from "express";

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

export default router;
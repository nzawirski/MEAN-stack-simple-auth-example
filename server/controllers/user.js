const express = require('express')
const router = express.Router()
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const readToken = require('../middleware/read-token')

const User = require('../models/user');
const Password = require('../models/password')

router.post('/', (req, res) => {
    const { email, password, first_name, last_name } = req.body;
    if (!email || !password || !first_name || !last_name) {
        return res.status(400).json({
            message: "Please provide all required parameters"
        })
    }

    User.findOne({ email: email }, (err, user) => {
        if (err) {
            return res.status(500).json({ message: err.message })
        }
        if (user) {
            return res.status(409).send("User already exists")
        }
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) return res.status(500).json({ message: err.message })
            //set user details
            let user = new User({  email, first_name, last_name })

            //save user
            user.save((err, user) => {
                if (err) return res.status(500).json({ message: err.message })
                //save password
                let password = new Password({ user: user._id, password: hash })
                password.save((err) => {
                    if (err) return res.status(500).json({ message: err.message })
                })
                res.status(201).json(user);
            })
        })
    })
})

module.exports = router
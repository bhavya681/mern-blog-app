import express from 'express';
const router = express.Router();
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import "dotenv/config";
import User from '../models/User.js';
import fetchdata from '../middleware/fetchdata.js';


//Signup Route

router.post("/signup", async (req, res) => {

    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {

            res.status(400).json({ error: "Fields Can't be Empty" });

        }

        if (!email.includes('@')) {

            res.status(400).json({ error: "Please Enter Valid Email Address" });

        }

        const user = await User.findOne({ email });

        if (user) {

            res.status(400).json({ error: "User Already Exists,Please Kindly Login" })

        }

        const hassword = await bcrypt.hash(password, 8);

        const newUser = await User({

            name,
            email,
            password: hassword

        });

        await newUser.save();

        res.status(200).json({ success: 'Successfully Created User' });

    } catch (error) {

        res.status(500).json({ error: "Internal Server Error" });

    }

})


//Login Route

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    try {

        if (!email || !password) {

            res.status(400).json({ error: "Fields Can't be Empty" });

        }

        if (!email.includes('@')) {

            res.status(400).json({ error: "Enter Valid Email Address" });

        }

        const user = await User.findOne({ email });

        if (!user) {

            res.status(400).json({ error: "User Not Found" });

        }

        const doMatch = await bcrypt.compare(password, user.password);

        if (doMatch) {

            const token = jwt.sign({ userId: user.id }, "" + process.env.JWT_SECRET, {
                expiresIn: '7d'
            });

            res.status(200).json({ token, success: "Login Successfull" });

        } else {

            res.status(400).json({ error: "Password Not Found" });

        }

    } catch (error) {

        res.status(500).json({ error: "Internal Server Error" });

    }

})


//Get User Route

router.get("/getuser", fetchdata, async (req, res) => {

    try {

        const userId = req.userId;
        const user = await User.findById(userId).select("-password");
        res.send(user);

    } catch (error) {

        res.status(500).json({ error: "Internal Server Error" });

    }

})


export default router;
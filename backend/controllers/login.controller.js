import { userModel, verify } from "../models/user-model.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export  async function login(req, res) {
    try {
        const { error } = verify.login.validate(req.body, { abortEarly: false });
        if (error) {
            res.status(400).json({ error: error.details.message });
            return;
        }
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }, '+password')
        if (!user) {
            res.status(400).json({ error: 'Invalid email or password' })
            return;
        }
        const hashedPass = await bcrypt.compare(password, user.password);
        if (!hashedPass) {
            res.status(400).json({ error: 'Invalid email or password' })
            return;
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: process.env.EXPIRE });
        res.status(201).json({ message: "User created successfully", token });

    } catch (err) {
        res.status(400).json({ error: "An error occurred while logging in your account. Please try again." });
        console.log('there is error happenning while logging up');
    }
}
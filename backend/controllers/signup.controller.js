import { userModel, verify } from "../models/user-model.js";
import bcrypt from 'bcrypt';


export async function signup(req, res) {
    try {
        const { error } = verify.signup.validate(req.body, { abortEarly: false });
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        const { fullname, email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (user) {
            res.status(400).json({ error: 'Email is already taken' })
            return;
        }
        const hashedPass = await bcrypt.hash(password, 10);
        await userModel.create({ fullname, email, password: hashedPass });
        res.status(201).json({ message: "User created successfully" });

    } catch (err) {
        res.status(400).json({ error: "An error occurred while creating your account. Please try again." });
        console.log('there is error happenning while signning up');
    }
}
import { Schema, model } from "mongoose";
import Joi from "joi";

const userSchema = Schema({
    fullname: String,
    email: String,
    password: {
        type: String,
        select: false
    },
})

export const userModel = model('user', userSchema);


export const verify = {
    signup: Joi.object({
        fullname: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(50).required(),
        confirmPass: Joi.string().valid(Joi.ref('password')).required().messages({ "any.only": "Passwords don't match" }),
    }),
    login: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(50).required(),
    })
}


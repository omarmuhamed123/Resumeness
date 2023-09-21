import { Schema, model } from "mongoose";


const resumeSchema = Schema({
    userID: Schema.ObjectId,
    fullname: String,
    address: String,
    phone: String,
    email: String,
    portfolio: String,
    linkedIn: String,
    degree: String,
    institution: String,
    graduate: String,
    skillData: Array,
    langData: Array,
    hobbData: Array,
    experData: Array,
    projData: Array,

})

export const resumeModel = model('resumes', resumeSchema);
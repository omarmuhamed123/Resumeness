import { resumeModel } from "../models/resume-model.js";


export async function history(req, res) {
    try {
        const data = await resumeModel.find({ userID: req.user._id }).select({ _id: 0, userID: 0, __v: 0 });
        console.log(data);
        res.status(200).json({ status: 'success', data });

    } catch (err) {
        res.status(400).json({ error: 'Failed to get the resumes' });
    }
}
import { resumeModel } from "../models/resume-model.js";

export async function resumeSave(req, res) {
    try {
        const data = req.body;
        await resumeModel.create({ userID: req.user._id, ...data, })
        res.status(200).json({ status: 'success' });

    } catch (err) {
        res.status(400).json({ error: 'Failed to save the resume' });
    }


}
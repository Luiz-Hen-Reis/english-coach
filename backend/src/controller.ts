import { Request, Response } from "express";
import getAnswer from "./services/getAnswer";

export async function chat(req: Request, res: Response) {
    try {
        const question = req.body.question;

        if (!question) return res.status(400).json({ error: "No question provided." })

        const answer = await getAnswer(question);

        res.status(200).json({ role: answer.role, text: answer.content });

    } catch (error) {
        res.status(500).json({ error: "Internal server error." })
    }
};
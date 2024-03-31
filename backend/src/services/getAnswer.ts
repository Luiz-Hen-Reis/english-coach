import { config } from "dotenv"
import { contextsScripts } from "../scripts";

config();

const API_KEY = process.env.OPENAI_KEY;

const context = {
    role: "system",
    content: contextsScripts.context
}

const conversationHistory = [context];

export default async function getAnswer(question: string) {
    question = question + contextsScripts.questionInstruction;

    const fullQuestion = {
        role: "user",
        content: question
    };

    conversationHistory.push(fullQuestion);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: conversationHistory
        }),
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", fetchOptions);

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        
        const answer = data.choices[0].message;
    
        const fullAnswer = {
          role: answer.role,
          content: answer.content,
        };

        conversationHistory.push(fullAnswer);

        return answer;

    } catch (error) {
        console.error("Error ", error);
        
    }
}
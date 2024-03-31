import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

export type MessageType = {
  author: string;
  text: string;
}

export default function App() {
  const [question, setQuestion] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);

  const sendQuestion = async () => {
    try {
        const response = await axios.post('http://localhost:5000/chat', { question });
        const newMessages: MessageType[] = [...messages, { author: 'user', text: question }, { author: response.data.role, text: response.data.text }];
        setMessages(newMessages);
        setQuestion('');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleQuestion = (e: ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value);

  return (
    <div className="flex flex-col justify-between items-center h-full py-8 lg:max-w-[1024px] lg:m-auto">
      <Header />
      <main className="flex-1 w-full overflow-y-auto my-2">
        <Chat messages={messages} />
      </main>
      <Footer handleQuestion={handleQuestion} question={question} handleSubmit={sendQuestion} />
    </div>
  )
};
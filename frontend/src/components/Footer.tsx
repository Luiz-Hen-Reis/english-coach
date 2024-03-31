import { ChangeEvent } from 'react';
import Button from "./Button";

type Props = {
  handleQuestion: (e: ChangeEvent<HTMLInputElement>) => void;
  question: string;
  handleSubmit: () => void;
}

export default function Footer({ handleQuestion, question, handleSubmit }: Props) {

    return (
      <footer className="relative w-full px-6">
        <div className="relative">
          <input type="text" value={question} onChange={handleQuestion} className="w-full py-5 px-4 bg-[#FFFFFF]/20 rounded-md border border-[#FFFFFF]/50 outline-none" />
          <Button handleSubmit={handleSubmit} />
        </div>
      </footer>
    );
  }
  
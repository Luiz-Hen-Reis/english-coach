import { MessageType } from "../App";
import Message from "./Message";

type Props = {
  messages: MessageType[];
}

export default function Chat({ messages }: Props) {
  return (
    <div className="flex flex-col space-y-4 px-6">
        {messages.map((message, index) => (
          <Message author={message.author} text={message.text} key={index} />
        ))}
    </div>
  )
}

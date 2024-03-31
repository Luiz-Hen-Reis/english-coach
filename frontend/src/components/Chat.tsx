import Message from "./Message";

export default function Chat() {
  return (
    <div className="flex flex-col space-y-4 px-6">
        <Message author="User" text="Olá!" />
        <Message author="Bot" text="Olá! Como posso ajudá-lo hoje?" />
        <Message author="User" text="Estou com uma dúvida sobre inglês." />
        <Message author="Bot" text="Claro, estou aqui para ajudar." />
        <Message author="User" text="Olá!" />
        <Message author="Bot" text="Olá! Como posso ajudá-lo hoje?" />
        <Message author="User" text="Estou com uma dúvida sobre inglês." />
        <Message author="Bot" text="Claro, estou aqui para ajudar." />
        <Message author="User" text="Olá!" />
        <Message author="Bot" text="Olá! Como posso ajudá-lo hoje?" />
        <Message author="User" text="Estou com uma dúvida sobre inglês." />
        <Message author="Bot" text="Claro, estou aqui para ajudar." />
    </div>
  )
}

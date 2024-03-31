type Props = {
  handleSubmit: () => void;
}

export default function Button({ handleSubmit }: Props) {
  return (
    <button className="absolute top-1 right-1 mt-2 mr-2 shadow-md" onClick={handleSubmit}>
        <div className="w-10 h-10 app-green-color rounded-md flex justify-center items-center cursor-pointer">
            <img src="/assets/send-msg-icon.svg" alt="send message" />
        </div>
    </button>
  )
}

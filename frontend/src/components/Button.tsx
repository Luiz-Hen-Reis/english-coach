export default function Button() {
  return (
    <button className="absolute top-1 right-1 mt-2 mr-2">
        <div className="w-10 h-10 app-green-color rounded-md flex justify-center items-center cursor-pointer">
            <img src="/assets/send-msg-icon.svg" alt="send message" />
        </div>
    </button>
  )
}

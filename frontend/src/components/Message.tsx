type Props = {
  author: string;
  text: string;
}

export default function Message({ author, text }: Props) {
  return (
    <div className={`flex flex-col ${author === 'user' ? 'items-end' : 'items-start'}`}>
      <p className="text-sm mb-1">{author}</p>
      <div className={`app-green-color rounded-md p-3 shadow-md ${author === 'user' ? '' : 'bg-[#FFFFFF]/20'}`}>
        <p>{text}</p>
      </div>
    </div>
  )
}

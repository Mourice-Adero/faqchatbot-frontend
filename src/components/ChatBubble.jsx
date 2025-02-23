function ChatBubble({ role, content, time }) {
  return (
    <div
      className={`p-3 my-1 rounded-lg ${
        role === "user"
          ? "bg-blue-500 text-white self-end"
          : "bg-gray-200 text-black self-start"
      }`}
    >
      <p>{content}</p>
      <p className="text-xs text-gray-500 self-end">{time}</p>
    </div>
  );
}
export default ChatBubble;

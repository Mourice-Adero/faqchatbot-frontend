import { useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input) {
      onSend(input);
      setInput("");
    }
  };
  return (
    <div className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border rounded-l-lg p-2"
      />
      <button className="" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
export default ChatInput;

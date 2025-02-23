import { useState } from "react";
import ChatBubble from "../components/ChatBubble";
import ChatInput from "../components/ChatInput";
import { sendMsgToApi } from "../services/api";

function Chat() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {
    const newMessages = [...messages, { role: "user", content: message }];
    setMessages(newMessages);
    try {
      const response = await sendMsgToApi(message);
      setMessages([...newMessages, { role: "bot", content: response }]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-2xl mx-auto bg-white shadow-lg">
      {/* Chat Messages Container */}
      <div className="flex-1 overflow-auto p-4 space-y-4 bg-gray-50 rounded-lg">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            role={msg.role}
            content={msg.content}
            time={new Date().toLocaleTimeString()}
          />
        ))}
      </div>

      {/* Chat Input Fixed at Bottom */}
      <div className="sticky bottom-0 bg-white p-2 border-t">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default Chat;

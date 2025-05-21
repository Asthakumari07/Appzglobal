import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to Appz Global Tech. How can we assist you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = {
      sender: "bot",
      text: getBotResponse(input),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const getBotResponse = (message) => {
    const lower = message.toLowerCase();

    if (lower.includes("service"))
      return "We offer Web, Mobile, Software, Cloud & DevOps, and Digital Marketing services.";
    if (lower.includes("contact"))
      return "You can reach us at info@appzglobaltech.com or +91-8459974712";
    if (lower.includes("hello") || lower.includes("hi"))
      return "Hi there! How can I help you today?";
    if (lower.includes("location"))
      return "G-39, 2nd Floor, G-Block, Sector-63, Noida-201301";

    return "Thanks for your message. Our team will get back to you soon!";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[40%] flex justify-center rounded-xl bg-white border border-gray-300 flex-col shadow-lg">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-t-xl font-semibold">
          💬 Chat with Us
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2 h-80">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="p-2 border-t flex items-center gap-2">
          <input
            type="text"
            placeholder="Type here..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

import { useState } from "react";
import Container from "./Container";

export default function LiveChat() {
  const [message, setMessage] = useState("");
  // চ্যাট হিস্ট্রি ট্র্যাক করার জন্য স্টেট (ডিফল্ট একটা মেসেজ রাখা হয়েছে)
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      sender: "specialist",
      text: "Hi! I'm your Plant Specialist. How can I help you today?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // ১. ইউজারের নতুন মেসেজ চ্যাট হিস্ট্রিতে যোগ করা
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    setChatHistory((prev) => [...prev, userMessage]);
    const currentMessage = message; // বটের উত্তরের জন্য টেক্সট সেভ রাখা হলো
    setMessage(""); // ইনপুট ফিল্ড ক্লিয়ার করা

    // ২. একটি ফেক বা ডেমো অটোমেটিক বটের রিপ্লাই জেনারেট করা (১ সেকেন্ড পর আসবে)
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "specialist",
          text: `Thanks for asking about "${currentMessage}". Our team will guide you deeply very soon!`,
        },
      ]);
    }, 1000);
  };

  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        {/* Chat Window Main Wrapper */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
          {/* Chat Header Area */}
          <div className="bg-[#dcece4] px-6 py-4 border-b border-gray-150 text-center">
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
              Live Chat with Plant Specialist
            </h2>
          </div>

          {/* Chat Body & Interaction Area */}
          <div className="p-6 md:p-8 flex flex-col bg-white">
            {/* Dynamic Chat Messages Container */}
            <div className="flex flex-col gap-6 min-h-[300px] max-h-[450px] overflow-y-auto mb-8 pr-2">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`text-sm md:text-base px-5 py-3 rounded-2xl max-w-[85%] md:max-w-[65%] leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#128a51] text-white rounded-tr-none"
                        : "bg-gray-150/70 text-gray-700 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Form with Input field and Send button */}
            <form onSubmit={handleSend} className="flex gap-4 items-center">
              {/* Input Field */}
              <input
                type="text"
                placeholder="Ask me about your plant..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input input-bordered flex-1 rounded-md text-gray-600 font-normal bg-white border-gray-300 h-11 focus:outline-none focus:border-[#128a51] placeholder-gray-400"
              />
              {/* Send Button */}
              <button
                type="submit"
                className="btn bg-[#128a51] hover:bg-[#0f7645] text-white font-medium rounded-md px-10 h-11 min-h-0 border-none transition-colors duration-200 text-base tracking-wide"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

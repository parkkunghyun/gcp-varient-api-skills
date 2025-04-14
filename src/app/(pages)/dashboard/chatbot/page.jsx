'use client';

import { useState, useRef, useEffect } from 'react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: '오류가 발생했어요 😢' }]);
    } finally {
      setLoading(false);
      setInput(''); // 메시지를 전송한 후 input을 비웁니다.
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 drop-shadow-md">💬 Gemini 챗봇</h1>
      <p className="text-center text-gray-500 mt-2 mb-2">Gemini 챗봇은 자연어 처리 AI를 이용해 다양한 질문에 답변을 제공합니다.</p>
      <div className="bg-gradient-to-br p-2 from-white to-gray-50 rounded-2xl shadow-2xl border h-[600px] flex flex-col">
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-3 px-4 rounded-xl text-sm shadow-md transition-all duration-200 ${
                  msg.role === 'user'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-sm text-gray-400 animate-pulse">답변 작성 중...</div>
          )}

          <div ref={chatEndRef} />
        </div>

        <div className="border-t px-4 py-3 flex shadow-inner bg-white">
          <input
            type="text"
            placeholder="질문을 입력하세요..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 disabled:bg-blue-300"
            onClick={sendMessage}
            disabled={loading}
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;

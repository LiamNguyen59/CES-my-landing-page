"use client";

import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import './Chatbot.css';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export default function Chatbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [systemPrompt, setSystemPrompt] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Load System Prompt from public/chatbot_data.txt
    fetch('/chatbot_data.txt')
      .then(res => res.text())
      .then(text => {
        const fullPrompt = `Vai trò: AI trợ lý độc quyền cho chuyên gia.
Chỉ được trả lời dựa trên Knowledge Base sau đây. 
Phải trả lời bằng Markdown đẹp. 
Luôn: Chào thân thiện, Trả lời rõ ràng, Kết thúc bằng lời mời hỏi thêm. 
Nếu ngoài phạm vi → từ chối nhẹ + hướng dẫn liên hệ.

Knowledge Base:
${text}`;
        setSystemPrompt(fullPrompt);
      })
      .catch(err => console.error("Error loading chatbot data:", err));
  }, []);

  const initChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Xin chào! Tôi là trợ lý AI ảo của chuyên gia Vanguard. Bạn đang quan tâm đến thị trường cổ phiếu hay cần tư vấn đầu tư?'
      }
    ]);
  };

  useEffect(() => {
    if (messages.length === 0 && systemPrompt) {
      initChat();
    }
  }, [messages, systemPrompt]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Clear chat logic
    setMessages([]); 
    setTimeout(() => {
      initChat(); // Reset the message with animation stop
      setIsRefreshing(false); 
    }, 500);
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = { role: 'user', content: inputText.trim() };
    const currentMessages = [...messages, userMessage];
    
    setMessages(currentMessages);
    setInputText('');
    setIsTyping(true);

    try {
      // Prepare API message payload
      const payloadMessages = [
        { role: 'system', content: systemPrompt },
        ...currentMessages.map(m => ({ role: m.role, content: m.content }))
      ];

      // Gửi request tới OpenRouter
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.href, // Yêu cầu bắt buộc của OpenRouter free
          'X-Title': 'Vanguard Wealth Landing Page' 
        },
        body: JSON.stringify({
          model: 'z-ai/glm-4.5-air:free',
          messages: payloadMessages,
        })
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("OpenRouter API Error Details:", errText);
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      const aiResponse = data.choices[0].message.content;

      setMessages([...currentMessages, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages([...currentMessages, { 
        role: 'assistant', 
        content: 'Xin lỗi, đã có lỗi xảy ra. Bạn có thể liên hệ trực tiếp qua Zalo hoặc Email để được hỗ trợ tốt nhất.' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Convert markdown function helper mapping Marked library (assert sync mode wrapper)
  const renderMarkdown = (text: string) => {
    // using async: false for Marked parser if applicable, fallback mapping simple cast
    const parsed = marked.parse(text) as string;
    return { __html: parsed };
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Button Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 z-50 chatbot-glass"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat Window Glassmorphism Layout */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-2rem)] flex flex-col rounded-2xl shadow-2xl overflow-hidden z-50 chatbot-glass transition-all duration-300 ease-in-out">
          
          {/* Header */}
          <div className="px-4 py-3 bg-[#2563eb] opacity-95 text-white flex items-center justify-between border-b border-[#1d4ed8]">
            <div className="flex items-center gap-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="font-semibold tracking-wide text-[15px]">Vanguard Expert</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleRefresh}
                title="Làm mới cuộc hội thoại"
                className="hover:text-blue-200 transition-colors"
                disabled={isRefreshing}
              >
                <svg className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                title="Đóng chat"
                className="hover:text-blue-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area - Background transparent for glass effect overlay */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/60 pb-8">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-[1.2rem] px-4 py-2 text-[14.5px] ${
                    msg.role === 'user' 
                      ? 'bg-[#2563eb] text-white rounded-br-none shadow-md' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none shadow-sm chat-markdown'
                  }`}
                  dangerouslySetInnerHTML={
                    msg.role === 'assistant' 
                      ? renderMarkdown(msg.content)
                      : undefined
                  }
                >
                  {msg.role === 'user' ? msg.content : undefined}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
               <div className="flex justify-start">
                 <div className="max-w-[85%] rounded-[1.2rem] rounded-bl-none px-4 py-2.5 bg-white border border-gray-100 shadow-sm text-gray-500 text-xs flex items-center gap-1.5">
                   Đang nhập 
                   <div className="typing-dots mt-[1px]"><span></span><span></span><span></span></div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white/95 backdrop-blur-sm border-t border-gray-100 flex items-center gap-2">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập yêu cầu tư vấn..."
              className="flex-1 px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] text-sm text-gray-900 placeholder-gray-500 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping || !inputText.trim()}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2563eb] text-white hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <svg className="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>

        </div>
      )}
    </>
  );
}

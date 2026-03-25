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

      // Gửi request tới 9Router
      const res = await fetch('https://9router.vuhai.io.vn/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer sk-4bd27113b7dc78d1-lh6jld-f4f9c69f',
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.href, // Yêu cầu bắt buộc của OpenRouter free
          'X-Title': 'Vanguard Wealth Landing Page' 
        },
        body: JSON.stringify({
          model: 'ces-chatbot-gpt-5.4',
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
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 z-50 cyber-glass"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat Window Glassmorphism Layout */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-2rem)] flex flex-col rounded-2xl overflow-hidden z-50 cyber-glass transition-all duration-300 ease-in-out">
          
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3b82f6]/20 rounded-full flex items-center justify-center border border-[#3b82f6]/30 shadow-inner">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><path d="M9 14h.01"/><path d="M15 14h.01"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold tracking-wide text-[16px] leading-tight text-white/95">Ai Assistant</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-black/20"></span>
                  </span>
                  <span className="text-[10px] text-green-400 font-bold tracking-widest uppercase">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button onClick={handleRefresh} disabled={isRefreshing} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white">
                <svg className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 pb-8 scroll-smooth" id="chat-messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center shrink-0 mb-1 shadow-sm">
                    <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><path d="M9 14h.01"/><path d="M15 14h.01"/></svg>
                  </div>
                )}
                
                <div 
                  className={`max-w-[76%] rounded-[1.25rem] px-4 py-3 text-[14.5px] shadow-sm ${
                    msg.role === 'user' 
                      ? 'cyber-bubble-user text-white rounded-br-sm' 
                      : 'cyber-bubble-ai text-gray-100/90 rounded-bl-sm chat-markdown'
                  }`}
                  dangerouslySetInnerHTML={
                    msg.role === 'assistant' 
                      ? renderMarkdown(msg.content)
                      : undefined
                  }
                >
                  {msg.role === 'user' ? msg.content : undefined}
                </div>
                
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0 mb-1 shadow-sm">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
               <div className="flex items-end gap-2.5 justify-start">
                 <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center shrink-0 mb-1 shadow-sm">
                   <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><path d="M9 14h.01"/><path d="M15 14h.01"/></svg>
                 </div>
                 <div className="max-w-[76%] rounded-[1.25rem] rounded-bl-sm px-4 py-3 cyber-bubble-ai text-gray-300 text-[14.5px] items-center gap-2 flex shadow-sm">
                   <div className="typing-dots mt-[1px]"><span></span><span></span><span></span></div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/5 flex items-center gap-3">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hỏi tôi bất cứ điều gì..."
              className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-white/30 focus:bg-white/10 text-[14.5px] tracking-wide text-white placeholder-gray-400/80 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping || !inputText.trim()}
              className="w-[48px] h-[48px] rounded-full flex shrink-0 items-center justify-center bg-transparent border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-[22px] h-[22px] ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>

        </div>
      )}
    </>
  );
}

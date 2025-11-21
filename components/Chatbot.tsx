import React, { useState, useEffect, useRef } from 'react';
import { MessageCircleIcon, XIcon, SendIcon, SparklesIcon } from './Icons';
import { sendMessageToGemini } from '../services/geminiService';
import { Message, Sender } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy la IA de Tomas. Pregúntame sobre sus proyectos, skills o cómo contactarlo.',
      sender: Sender.Bot,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: Sender.User,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: Sender.Bot,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div 
        className={`glass-panel mb-4 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-12'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <SparklesIcon className="w-5 h-5" />
            <span className="font-bold">Asistente IA</span>
          </div>
          <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-80 overflow-y-auto p-4 bg-slate-900/80 flex flex-col gap-3">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`max-w-[85%] p-3 rounded-xl text-sm ${
                msg.sender === Sender.User 
                  ? 'bg-indigo-600 text-white self-end rounded-tr-none' 
                  : 'bg-slate-700 text-slate-100 self-start rounded-tl-none'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="self-start bg-slate-700 p-3 rounded-xl rounded-tl-none max-w-[85%]">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-slate-800 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-transparent"
            disabled={isLoading}
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SendIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${
          isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
        } bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-4 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-110 absolute bottom-0 right-0`}
        aria-label="Open Chat"
      >
        <MessageCircleIcon className="w-8 h-8" />
      </button>
      
      {/* Close Button (Visible when open) */}
      <button
        onClick={toggleChat}
        className={`${
          !isOpen ? '-rotate-90 opacity-0 pointer-events-none' : 'rotate-0 opacity-100'
        } bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 absolute bottom-0 right-0`}
        aria-label="Close Chat"
      >
        <XIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Chatbot;
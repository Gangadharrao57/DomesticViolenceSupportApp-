import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { storageService } from '../../utils/storage';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  userId: string;
  text: string;
  timestamp: string;
  isSupport: boolean;
}

const supportResponses = [
  "Thank you for reaching out. You're not alone, and we're here to help. Can you tell me more about what's happening?",
  "I understand this must be very difficult for you. Your safety is our top priority. Have you been able to create a safety plan?",
  "It's brave of you to seek help. Would you like information about local shelters or legal resources in your area?",
  "I hear you, and your feelings are valid. Remember that the abuse is not your fault. What kind of support would be most helpful for you right now?",
  "Thank you for sharing that with me. Would you like to talk about safety planning or would you prefer to discuss other resources available to you?",
  "I'm here to support you. Please remember that you deserve to be treated with respect and kindness. Would you like to explore your options together?",
  "That sounds really challenging. You've taken an important step by reaching out. Can I help you connect with emergency services or other support resources?",
  "I want you to know that help is available 24/7. If you're in immediate danger, please call 911. Otherwise, I'm here to listen and provide information."
];

export function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      const savedMessages = storageService.getMessages(user.id);
      if (savedMessages.length === 0) {
        // Add welcome message
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          userId: user.id,
          text: "Hello! I'm a support counselor here to help you. This is a safe and confidential space. How can I assist you today?",
          timestamp: new Date().toISOString(),
          isSupport: true
        };
        storageService.addMessage(user.id, welcomeMessage);
        setMessages([welcomeMessage]);
      } else {
        setMessages(savedMessages);
      }
    }
  }, [user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim() || !user) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      userId: user.id,
      text: inputText,
      timestamp: new Date().toISOString(),
      isSupport: false
    };

    storageService.addMessage(user.id, userMessage);
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate support response
    setTimeout(() => {
      const randomResponse = supportResponses[Math.floor(Math.random() * supportResponses.length)];
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        userId: user.id,
        text: randomResponse,
        timestamp: new Date().toISOString(),
        isSupport: true
      };

      storageService.addMessage(user.id, supportMessage);
      setMessages(prev => [...prev, supportMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-8rem)]">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-bg)' }}
            >
              <Bot className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h2 className="text-gray-900">Support Chat</h2>
              <p className="text-sm text-gray-600">Confidential support available 24/7</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.isSupport ? 'justify-start' : 'justify-end'
              }`}
            >
              {message.isSupport && (
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-bg)' }}
                >
                  <Bot className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                </div>
              )}
              <div
                className={`max-w-md px-4 py-3 rounded-lg ${
                  message.isSupport
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-white'
                }`}
                style={
                  !message.isSupport
                    ? { backgroundColor: 'var(--color-primary)' }
                    : {}
                }
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.isSupport ? 'text-gray-500' : 'text-white opacity-75'
                  }`}
                >
                  {new Date(message.timestamp).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              {!message.isSupport && (
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--color-bg)' }}
              >
                <Bot className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              </div>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-6 border-t border-gray-200">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="px-6 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            This is a simulated chat for demonstration. In a real application, this would connect to trained counselors.
          </p>
        </form>
      </div>

      {/* Emergency Notice */}
      <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-sm text-red-800">
          <strong>In immediate danger?</strong> Please call 911 or the National Domestic Violence Hotline at 1-800-799-7233 for immediate help.
        </p>
      </div>
    </div>
  );
}

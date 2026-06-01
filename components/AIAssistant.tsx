"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import Link from "next/link";
import { CAL_LINK } from "@/lib/utils";

type Message = {
  id: string;
  role: "ai" | "user";
  content: string;
};

const defaultMessage: Message = {
  id: "1",
  role: "ai",
  content: "Hi there! 👋 I'm the PyrexxAI virtual assistant. Ask me anything about our EMR integrations, HIPAA compliance, or pricing setup!",
};

const SUGGESTION_CHIPS = [
  { label: "EMR Integrations", query: "What EMR systems does the AI integrate with?" },
  { label: "HIPAA Compliance", query: "Is this voice AI fully HIPAA compliant?" },
  { label: "Pricing Setup", query: "How much does PyrexxAI cost?" },
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [mounted, setMounted] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const savedMessages = sessionStorage.getItem("pyrexxai-chat-history");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([defaultMessage]);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem("pyrexxai-chat-history", JSON.stringify(messages));
    }
  }, [messages, mounted]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  // Zero-dependency, ultra-lightweight Markdown parser for link rendering and bold text
  const renderMessageContent = (text: string, role: "ai" | "user") => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    
    // Process markdown bold tags first
    let processedText = text.replace(boldRegex, "<strong>$1</strong>");

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(processedText)) !== null) {
      const [fullMatch, linkText, linkUrl] = match;
      const index = match.index;

      if (index > lastIndex) {
        parts.push(
          <span 
            key={`text-${index}`} 
            dangerouslySetInnerHTML={{ __html: processedText.substring(lastIndex, index) }} 
          />
        );
      }

      const isExternal = linkUrl.startsWith("http") || linkUrl.startsWith("https");
      const linkClass = role === "user" 
        ? "text-white underline font-bold hover:text-brand-100" 
        : "text-brand-600 dark:text-brand-400 underline font-bold hover:text-brand-700 dark:hover:text-brand-300";

      if (isExternal) {
        parts.push(
          <a key={`link-${index}`} href={linkUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {linkText}
          </a>
        );
      } else {
        parts.push(
          <Link key={`link-${index}`} href={linkUrl} onClick={() => setIsOpen(false)} className={linkClass}>
            {linkText}
          </Link>
        );
      }

      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < processedText.length) {
      parts.push(
        <span 
          key="text-end" 
          dangerouslySetInnerHTML={{ __html: processedText.substring(lastIndex) }} 
        />
      );
    }

    return parts.length > 0 ? parts : <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  const executeSendMessage = async (userQuery: string) => {
    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userQuery,
    };

    const updatedMessages = [...messages, newUserMsg];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();
      
      const newAIMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: data.content,
      };
      setMessages((prev) => [...prev, newAIMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "ai",
          content: "I'm having trouble connecting to the server. Please [book a free demo](https://cal.com/clifford-bulya/15min) to speak with our team!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const query = inputValue;
    setInputValue("");
    executeSendMessage(query);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="PyrexxAI Virtual Assistant"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-[380px] h-[520px] max-h-[calc(100vh-8rem)] bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-600 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">PyrexxAI Assistant</h3>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs text-brand-100">Live AI Agent</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md p-1"
                aria-label="Close chat window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50 dark:bg-gray-900/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === "user" ? "bg-brand-600 text-white rounded-br-none" : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-bl-none shadow-sm"}`}>
                    {renderMessageContent(msg.content, msg.role)}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-bl-none px-4 py-4 shadow-sm flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Smart Interaction: Suggestion Chips */}
            {!isTyping && (
              <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900/50 flex flex-wrap gap-2 border-t border-gray-100 dark:border-gray-800">
                {SUGGESTION_CHIPS.map((chip, i) => (
                  <button
                    key={i}
                    onClick={() => executeSendMessage(chip.query)}
                    className="text-xs bg-white hover:bg-brand-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1.5 font-medium transition-all focus-visible:outline-none"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleFormSubmit} className="p-4 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
              <div className="relative flex items-center">
                <label htmlFor="chat-input" className="sr-only">Type your message to the AI assistant</label>
                <input
                  id="chat-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-gray-100 dark:bg-gray-900 border-none text-gray-900 dark:text-white text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 w-8 h-8 bg-brand-600 hover:bg-brand-700 disabled:bg-gray-400 dark:disabled:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-600 hover:bg-brand-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 relative"
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-gray-950 rounded-full"></span>
        )}
      </button>
    </div>
  );
}
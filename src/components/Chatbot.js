import React, { useEffect, useRef, useState } from 'react';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from './ui/language-provider';
import { askProfileBot } from '../lib/profileBot';

const Chatbot = () => {
  const { content, language } = useLanguage();
  const { chatbot } = content;

  const [open, setOpen] = useState(true);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  // Reset the greeting when language changes.
  useEffect(() => {
    setMessages([{ from: 'bot', text: chatbot.greeting }]);
  }, [chatbot.greeting]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, pending]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question || pending) return;

    setMessages((prev) => [...prev, { from: 'user', text: question }]);
    setInput('');
    setPending(true);

    try {
      const answer = await askProfileBot(question, language);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: answer || chatbot.fallback },
      ]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: 'bot', text: chatbot.fallback }]);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? chatbot.close : chatbot.open}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {open ? <FiX className="h-6 w-6" /> : <FiMessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl">
          <div className="border-b border-border/60 bg-secondary/40 px-4 py-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-foreground">{chatbot.title}</h3>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                {chatbot.beta}
              </span>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {pending && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-secondary px-3 py-2 text-sm text-muted-foreground">
                  ...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border/60 p-3">
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={chatbot.placeholder}
                className="h-9 flex-1 text-sm"
              />
              <Button type="submit" size="icon" className="h-9 w-9 shrink-0" disabled={pending}>
                <FiSend className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-[10px] leading-tight text-muted-foreground">
              {chatbot.disclaimer}
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;

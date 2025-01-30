"use client"

import { useState, useEffect } from "react";
import { Send } from "lucide-react";

const ChatBar = ({ onHeightChange }: { onHeightChange: (height: number) => void }) => {
  const [textareaHeight, setTextareaHeight] = useState(0);
  const [adjustCount, setAdjustCount] = useState(0);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    const lineCount = textarea.value.split('\n').length;

    const newAdjustCount = lineCount - 1;
    setAdjustCount(newAdjustCount);

    if (newAdjustCount <= 3) {
      textarea.style.height = 'auto';
      const newHeight = textarea.scrollHeight;
      textarea.style.height = `${newHeight}px`;
      setTextareaHeight(newHeight);

      const button = textarea.parentElement?.nextElementSibling as HTMLButtonElement;
      if (button) {
        button.style.height = `${newHeight + 16}px`;
      }
    } else {
      textarea.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    onHeightChange(textareaHeight);
  }, [textareaHeight, onHeightChange]);

  return (
    <div className="w-full bg-gray-200 rounded-xl p-2 flex items-start">
      <div className="flex-grow bg-white text-black p-2 rounded-l flex items-center">
        <textarea 
          placeholder="输入你的消息" 
          className="w-full outline-none resize-none" 
          rows={1}
          onInput={handleInput}
        />
      </div>
      <button className="group relative bg-gradient-to-r from-blue-300 to-purple-300 text-white p-2 rounded
       hover:from-blue-400 hover:to-purple-400 transition-all duration-300 flex items-center w-10 hover:w-24
       hover:rounded-e-xl h-auto">
        <Send />
        <span className="absolute right-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">Send</span>
      </button>
    </div>
  );
}

export default ChatBar;
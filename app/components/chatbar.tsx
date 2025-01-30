"use client"

import { useState, useEffect } from "react";
import { Send } from "lucide-react";

const ChatBar = ({ onHeightChange }: { onHeightChange: (height: number) => void }) => {
  const [textareaHeight, setTextareaHeight] = useState(0);
  const [adjustCount, setAdjustCount] = useState(0);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    const lineCount = textarea.value.split('\n').length;

    if (lineCount <= 3) {
      setAdjustCount(adjustCount - 1);
    } else {
      setAdjustCount(adjustCount + 1);
    }

    if (adjustCount < 3) {
      textarea.style.height = 'auto';
      const newHeight = textarea.scrollHeight;
      textarea.style.height = `${newHeight}px`;
      setTextareaHeight(newHeight);
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
      <button className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600">
        <Send />
      </button>
    </div>
  );
}

export default ChatBar;
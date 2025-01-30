import { useState, useEffect } from "react";

const Conversation = ({ chatBarHeight }: { chatBarHeight: number }) => {
  const [conversationHeight, setConversationHeight] = useState('80%');

  useEffect(() => {
    let newHeight = `calc(80% - ${chatBarHeight}px)`;
    newHeight = newHeight.replace('%', '');
    setConversationHeight(newHeight);
  }, [chatBarHeight]);

  return (
    <div className="w-full bg-gray-200 rounded-xl p-2" style={{ height: conversationHeight }}>
      <div className="bg-gray-100 text-white p-2 rounded h-full">
        <span className="text-green-500"> 对话框 </span>
      </div>
    </div>
  );
}

export default Conversation;
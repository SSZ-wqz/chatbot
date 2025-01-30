"use client"

import { PanelLeftClose, PanelLeftOpen, File, Bot, Bolt, User } from "lucide-react";
import { useState } from "react";

const Filesys = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`flex flex-col transition-width duration-300 ${isOpen ? 'w-40' : 'w-16'} h-[calc(100vh-64px)] bg-gray-100 items-center justify-between`}>
      <div className="top-panel w-full flex flex-col gap-2 justify-between items-center mt-2">
        <div className={`flex w-full items-center transition duration-300 ease-in-out ${isOpen ? 'justify-start pl-8' : 'justify-center'}`}>
          <File className="w-6 h-6 text-gray-500 my-3"/>
          {isOpen && <span className="text-gray-500 ml-2">Files</span>}
        </div>
        <div className={`flex w-full items-center transition duration-500 ease-in-out hover:bg-gray-200 rounded-xl ${isOpen ? 'justify-start pl-8' : 'justify-center'}`}>
          <Bot className="w-6 h-6 text-gray-500 my-3"/>
          {isOpen && <span className="text-gray-500 ml-2">Chatbot</span>}
        </div>
        <div className={`flex w-full items-center transition duration-500 ease-in-out hover:bg-gray-200 rounded-xl ${isOpen ? 'justify-start pl-8' : 'justify-center'}`}>
          <Bolt className="w-6 h-6 text-gray-500 my-3"/>
          {isOpen && <span className="text-gray-500 ml-2">Settings</span>}
        </div>
        <div className={`flex w-full items-center transition duration-500 ease-in-out hover:bg-gray-200 rounded-xl ${isOpen ? 'justify-start pl-8' : 'justify-center'}`}>
          <User className="w-6 h-6 text-gray-500 my-3"/>
          {isOpen && <span className="text-gray-500 ml-2">User</span>}
        </div>
      </div>
      <div className="bottom-panel flex justify-center items-center h-16 w-full">
        <div onClick={handleOpen} className="w-10 h-10 hover:bg-gray-200 rounded-xl flex items-center justify-center transition duration-300 ease-in-out cursor-pointer">
          {isOpen ? <PanelLeftClose className="w-6 h-6 text-gray-500 my-3"/> : <PanelLeftOpen className="w-6 h-6 text-gray-500 my-3"/>}
        </div>
      </div>
    </div>
  );
}

export default Filesys;
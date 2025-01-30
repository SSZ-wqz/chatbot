  "use client"

  import { PanelLeftClose, PanelLeftOpen, File, Bot, Bolt, User } from "lucide-react";
  import { useState } from "react";

  const Filesys = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullyOpen, setIsFullyOpen] = useState(false);
    const [currentPanel, setCurrentPanel] = useState(2);

    const handleOpen = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setTimeout(() => {
          setIsFullyOpen(true);
        }, 250); 
      } else {
        setTimeout(() => {
          setIsFullyOpen(false);
        }, 0);
      }
    }

    return (
      <div className={`flex flex-col transition-width duration-300 ${isOpen ? 'w-40' : 'w-16'} h-[calc(100vh-64px)] items-center justify-between`}>
        <div className="top-panel w-full flex flex-col gap-2 justify-between items-center mt-4">
          <div onClick={() => setCurrentPanel(1)} className={`${isOpen ? "w-32" : "w-10"} h-10 ${currentPanel === 1 ? 'h-12 bg-gray-200' : ''} hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer`}>
            {isOpen ? (
              <div className="flex w-full items-center justify-start">
                <File className="w-6 h-6 text-gray-500 my-3 ml-4 mr-1"/>
                <span className={`text-gray-500 ml-2 transition-all duration-500 ease-in-out ${isFullyOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>Files</span>
              </div>
            ) : (
              <File className="w-6 h-6 text-gray-500 my-3"/>
            )}
          </div>
          <div onClick={() => setCurrentPanel(2)} className={`${isOpen ? "w-32" : "w-10"} h-10 ${currentPanel === 2 ? 'h-12 bg-gray-200' : ''} rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer`}>
            {isOpen ? (
              <div className="flex w-full items-center justify-start">
                <Bot className="w-6 h-6 text-gray-500 my-3 ml-4 mr-1"/>
                <span className={`text-gray-500 ml-2 transition-all duration-500 ease-in-out ${isFullyOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>Chatbot</span>
              </div>
            ) : (
              <Bot className="w-6 h-6 text-gray-500 my-3"/>
            )}
          </div>
          <div onClick={() => setCurrentPanel(3)} className={`${isOpen ? "w-32" : "w-10"} h-10 ${currentPanel === 3 ? 'h-12 bg-gray-200' : ''} hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer`}>
            {isOpen ? (
              <div className="flex w-full items-center justify-start">
                <Bolt className="w-6 h-6 text-gray-500 my-3 ml-4 mr-1"/>
                <span className={`text-gray-500 ml-2 transition-all duration-500 ease-in-out ${isFullyOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>Settings</span>
              </div>
            ) : (
              <Bolt className="w-6 h-6 text-gray-500 my-3"/>
            )}
          </div>
          <div onClick={() => setCurrentPanel(4)} className={`${isOpen ? "w-32" : "w-10"} h-10 ${currentPanel === 4 ? 'h-12 bg-gray-200' : ''} hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer`}>
            {isOpen ? (
              <div className="flex w-full items-center justify-start">
                <User className="w-6 h-6 text-gray-500 my-3 ml-4 mr-1"/>
                <span className={`text-gray-500 ml-2 transition-all duration-500 ease-in-out ${isFullyOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>User</span>
              </div>
            ) : (
              <User className="w-6 h-6 text-gray-500 my-3"/>
            )}
          </div>
        </div>
        <div className="bottom-panel flex justify-center items-center h-16 w-full">
          <div onClick={handleOpen} className={`${isOpen ? "w-28" : "w-10"} h-10 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer`}>
            {isOpen ? (
              <div className="flex w-full items-center justify-start">
                <PanelLeftClose className="w-6 h-6 text-gray-500 my-3 ml-4 mr-1"/>
                <span className={`text-gray-500 ml-2 transition-all duration-500 ease-in-out ${isFullyOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>Close</span>
              </div >
            ) : (
              <PanelLeftOpen className="w-6 h-6 text-gray-500 my-3"/>
            )}
          </div>
        </div>
      </div>
    );
  }

  export default Filesys;
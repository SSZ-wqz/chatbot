import { PanelLeftClose, PanelLeftOpen, File, Bot, Bolt, User } from "lucide-react";

const Filesys = () => {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-64px)] bg-gray-100 items-center justify-between">
      <div className="top-panel w-full flex flex-col gap-2 justify-between items-center mt-2">
        <File className="w-6 h-6 text-gray-500 my-3"/>
        <div className="w-10 h-10 hover:bg-gray-200 rounded-xl flex items-center justify-center transition duration-300 ease-in-out">
          <Bot className="w-6 h-6 text-gray-500 my-3"/>
        </div>
        <div className="w-10 h-10 hover:bg-gray-200 rounded-xl flex items-center justify-center transition duration-300 ease-in-out">
          <Bolt className="w-6 h-6 text-gray-500 my-3"/>
        </div>
        <div className="w-10 h-10 hover:bg-gray-200 rounded-xl flex items-center justify-center transition duration-300 ease-in-out">
          <User className="w-6 h-6 text-gray-500 my-3"/>
        </div>
      </div>
      <div className="bottom-panel flex justify-center items-cente h-16 w-full">
        <div className="w-10 h-10 hover:bg-gray-200 rounded-xl flex items-center justify-center transition duration-300 ease-in-out">
          <PanelLeftOpen className="w-6 h-6 text-gray-500 my-3"/>
        </div>
      </div>
    </div>
  );
}

export default Filesys;
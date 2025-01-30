"use client"

import { useState } from "react";
import AppHeader from "./components/appHeader";
import ChatBar from "./components/chatbar";
import Conversation from "./components/conversation";
import DiagramView from "./components/diagramView";
import Filesys from "./components/filesys";
import FileUpload from "./components/fileupl";
import MCode from "./components/mcode";

export default function Home() {
  const [chatBarHeight, setChatBarHeight] = useState(0);

  return (
    <div className="flex h-screen w-full">
      <div className="left-panel h-screen w-3/5 bg-gray-100">
        <div className="w-full h-16 bg-gray-100">
          <AppHeader />
        </div>
        <div className="flex w-full">
          <div className="bg-gray-100">
            <Filesys />
          </div>
          <div className="w-full bg-gray-200 p-4">
            <DiagramView />
          </div>
        </div>
      </div>
      <div className="right-panel flex flex-col h-screen w-2/5 p-4 bg-gray-100">
        <div className="w-full" style={{ height: `calc(100% - ${chatBarHeight}px)` }}>
          <MCode />
          <Conversation chatBarHeight={chatBarHeight} />
        </div>
        <div className="w-full">
          <FileUpload />
          <ChatBar onHeightChange={setChatBarHeight} />
        </div>
      </div>
    </div>
  );
}


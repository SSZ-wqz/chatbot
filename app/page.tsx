import AppHeader from "./components/appHeader";
import ChatBar from "./components/chatbar";
import Conversation from "./components/conversation";
import DiagramView from "./components/diagramView";
import Filesys from "./components/filesys";
import FileUpload from "./components/fileupl";
import MCode from "./components/mcode";

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      <div className="left-panel h-screen w-3/5 bg-gray-100">
        <div className="w-full h-16 bg-gray-200">
          <AppHeader />
        </div>
        <div className="flex h-full w-full">
          <div className="w-16 bg-gray-300">
            <Filesys />
          </div>
          <div className="w-full bg-gray-400">
            <DiagramView />
          </div>
        </div>
      </div>
      <div className="right-panel flex flex-col h-screen w-2/5 bg-gray-500">
        <div className="w-full h-[80%] bg-gray-600">
          <MCode />
          <Conversation />
        </div>
        <div className="w-full h-[20%] bg-gray-700">
          <FileUpload />
          <ChatBar />
        </div>
      </div>
    </div>
  );
}


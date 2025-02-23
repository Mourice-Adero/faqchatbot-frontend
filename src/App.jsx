import { useState } from "react";
import SwitchTabs from "./components/SwitchTabs";
import Chat from "./pages/chat";
import FAQs from "./pages/FAQs";

export default function App() {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <>
      <SwitchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "chat" ? <Chat /> : <FAQs />}
    </>
  );
}

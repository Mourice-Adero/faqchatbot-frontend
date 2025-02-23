function SwitchTabs({ activeTab, setActiveTab }) {
  return (
    <div>
      <button
        className={`px-4 py-2 mx-2 rounded ${
          activeTab === "chat" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setActiveTab("chat")}
      >
        Chat
      </button>
      <button
        className={`px-4 py-2 mx-2 rounded ${
          activeTab === "faq" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setActiveTab("faq")}
      >
        FAQs
      </button>
    </div>
  );
}

export default SwitchTabs;

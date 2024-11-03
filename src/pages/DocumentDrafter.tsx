import React, { useState } from 'react';
import { FileText, Send } from 'lucide-react';

export default function DocumentDrafter() {
  const [category, setCategory] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'bot'; text: string }>>([]);
  const [userInput, setUserInput] = useState('');

  const categories = [
    'Employment Contract',
    'Non-Disclosure Agreement',
    'Service Agreement',
    'Partnership Agreement',
    'Lease Agreement'
  ];

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setChatMessages([
      {
        type: 'bot',
        text: `Let's create a ${selectedCategory}. I'll guide you through the process. What's the purpose of this document?`
      }
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [
      ...chatMessages,
      { type: 'user', text: userInput },
      { type: 'bot', text: 'Thank you for providing that information. Let me help you with the next step...' }
    ];
    setChatMessages(newMessages);
    setUserInput('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Document Drafter</h1>

      {!category ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Select Document Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-indigo-50 transition"
              >
                <FileText className="h-5 w-5 text-indigo-600" />
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Drafting: {category}</h2>
            <button
              onClick={() => setCategory('')}
              className="text-gray-600 hover:text-gray-800"
            >
              Change Type
            </button>
          </div>

          <div className="h-96 overflow-y-auto mb-4 space-y-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-indigo-100 ml-12'
                    : 'bg-gray-100 mr-12'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your response..."
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-500 transition"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
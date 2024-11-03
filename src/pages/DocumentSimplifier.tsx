import React, { useState } from 'react';
import { Upload, FileText } from 'lucide-react';

export default function DocumentSimplifier() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [simplifiedText, setSimplifiedText] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;

    setIsProcessing(true);
    // Simulated API call
    setTimeout(() => {
      setSimplifiedText('This is a simplified version of your document...');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Document Simplifier</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <span className="text-gray-600">
                {file ? file.name : 'Drop your legal document here or click to upload'}
              </span>
            </label>
          </div>
          
          <button
            type="submit"
            disabled={!file || isProcessing}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition disabled:bg-gray-400"
          >
            {isProcessing ? 'Processing...' : 'Simplify Document'}
          </button>
        </form>
      </div>

      {simplifiedText && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Simplified Document</h2>
          </div>
          <div className="prose max-w-none">
            <p>{simplifiedText}</p>
          </div>
        </div>
      )}
    </div>
  );
}
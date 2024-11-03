import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Scale } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Legal Document Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Simplify legal documents and get expert assistance with our AI-powered platform
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/simplify"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
              >
                Simplify Document
              </Link>
              <Link
                to="/draft"
                className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 transition"
              >
                Draft Document
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FileText className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Document Simplification</h3>
              <p className="text-gray-600">
                Upload your legal documents and get simplified versions with clear explanations
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Scale className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Document Drafting</h3>
              <p className="text-gray-600">
                Create legal documents with our AI assistant guiding you through the process
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
              <p className="text-gray-600">
                Connect with legal experts for professional advice and document review
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Upload or Start</h3>
              <p className="text-gray-600">Upload your document or start drafting from scratch</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">AI Processing</h3>
              <p className="text-gray-600">Our AI analyzes and processes your document</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Review</h3>
              <p className="text-gray-600">Review the simplified or drafted document</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Expert Review</h3>
              <p className="text-gray-600">Optional consultation with legal experts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
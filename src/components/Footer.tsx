import React from 'react';
import { Scale } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="font-bold text-xl">LegalAI Assistant</span>
            </div>
            <p className="mt-2 text-gray-400">
              Empowering individuals and small businesses with AI-powered legal document assistance.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/simplify" className="text-gray-400 hover:text-white">Document Simplification</a></li>
              <li><a href="/draft" className="text-gray-400 hover:text-white">Document Drafting</a></li>
              <li><a href="/consult" className="text-gray-400 hover:text-white">Expert Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} LegalAI Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
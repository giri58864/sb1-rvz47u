import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileText, Users } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8" />
            <span className="font-bold text-xl">LegalAI Assistant</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/simplify" className="flex items-center space-x-1 hover:text-indigo-200">
              <FileText className="h-5 w-5" />
              <span>Simplify</span>
            </Link>
            <Link to="/draft" className="flex items-center space-x-1 hover:text-indigo-200">
              <FileText className="h-5 w-5" />
              <span>Draft</span>
            </Link>
            <Link to="/consult" className="flex items-center space-x-1 hover:text-indigo-200">
              <Users className="h-5 w-5" />
              <span>Consult Experts</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
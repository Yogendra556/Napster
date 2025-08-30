"use client"
import React, { useState } from 'react';
import { Menu, X, TrafficCone } from 'lucide-react';

export default function Navigation(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-cyan-400 p-2 rounded-lg">
              <TrafficCone className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Hari_Batti</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors duration-200">Home</a>
              <a href="#features" className="text-white hover:text-cyan-400 transition-colors duration-200">Features</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200">Home</a>
            <a href="#features" className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200">Features</a>
          </div>
        </div>
      )}
    </nav>
  );
};
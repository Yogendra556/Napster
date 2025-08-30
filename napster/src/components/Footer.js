"use client"
import React from 'react'
import { TrafficCone as Traffic, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-cyan-400 p-2 rounded-lg">
                <Traffic className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Hari_Batti</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Revolutionizing urban mobility with AI-powered traffic management solutions. 
              Building smarter cities for a better tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Features</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">contact@Hari_Batti.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">+91 70071 23567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer
"use client"
import React from 'react';
import { ArrowRight, Camera, Zap , TrafficCone , Brain} from 'lucide-react';

export default function Hero(){
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-cyan-400 p-4 rounded-2xl shadow-2xl">
              <TrafficCone className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-green-100">
              Hari<p className='font-bold text-green-700 inline'>_</p>Batti
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
            Smart Traffic Management System
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Harri_Batti is an AI-powered traffic management system that predicts congestion, optimizes signal timings, and provides real-time traffic visualization. By combining machine learning with a web-based dashboard, it reduces delays, improves urban mobility, and makes city travel smarter and eco-friendly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-[#F5F5DC] to-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span><a href="http://127.0.0.1:8000">Explore Solution</a></span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Camera className="h-8 w-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Real-time Analysis</h3>
              <p className="text-gray-300 text-sm">Predict traffic density at intersections using ML algorithms</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Brain className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Smart Decisions</h3>
              <p className="text-gray-300 text-sm">ML model analyzes traffic congestion and optimizes signal timing</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Zap className="h-8 w-8 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Dynamic Control</h3>
              <p className="text-gray-300 text-sm">Adjusts green time for busier lanes and roads according to traffic density</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
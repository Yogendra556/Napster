"use client"
import React from 'react';
import { Map, TrendingUp, AlertTriangle, Truck, Eye, BarChart3 } from 'lucide-react';

const Features = () => {
    const features = [
    {
      icon: Map,
      title: "Real-Time Traffic Visualization",
      description: "Color-coded signals showing live traffic conditions across the city.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "ML-based allocation of signal time",
      description: "Time allocated to green signal for respective lanes are calculated through ML algorithm.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: BarChart3,
      title: "Graphs",
      description: "Graph depicts how much time is allocated to individual lane for green signal.",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: Truck,
      title: "Emergency Vehicle Priority",
      description: "Detects ambulance/police/fire trucks and increases the time for green signal for each lane.",
      color: "from-green-500 to-emerald-400"
    }
  ];
  return (
     <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our Harri_Batti transforms how cities manage traffic flow
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:shadow-2xl transition-all duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
              
              <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
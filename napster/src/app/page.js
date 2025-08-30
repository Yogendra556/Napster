
import Image from "next/image"; 
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-800 to-green-800">
      <Navigation />
      <Hero />
      <Features />
      <Footer />
      </div>
    </div>
    
  );
}

import React, { useState, useEffect } from 'react';
import { BookOpen, Users, ArrowRight, MessagesSquare } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Users', value: '2K+', color: 'text-blue-400', bg: 'bg-blue-400/20' },
  { icon: BookOpen, label: 'Study Material', value: '2,500+', color: 'text-green-400', bg: 'bg-green-400/20' },
  { icon: MessagesSquare, label: 'Discussions', value: '5K+', color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-gradient-to-br from-slate-900 via-purple-800 to-slate-900">
      {/* Blurred Gradient Circles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[60px] animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-10 w-[350px] h-[350px] rounded-full bg-blue-600/20 blur-[60px] animate-[float_8s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-20 left-1/3 w-[280px] h-[280px] rounded-full bg-green-600/20 blur-[60px] animate-[float_7s_ease-in-out_infinite_1s]" />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-[particle-float_4s_ease-in-out_infinite]"
            style={{
              top: `${20 + (i * 12)}%`,
              left: `${15 + (i * 10)}%`,
              animationDuration: `${4 + (i * 0.5)}s`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 py-10 text-center">
        <h1 className="mb-3 text-white font-black leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Empower Your Learning Journey
        </h1>
        <p className="mb-8 text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Connect with educators and peers to share, discover, and discuss study materials—all in one place.
          <span className="text-purple-400 font-semibold"> personalized mentorship</span>,
          <span className="text-pink-400 font-semibold"> hands-on projects</span>, and
          <span className="text-blue-400 font-semibold"> industry connections</span>.
        </p>
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-5 mb-20`}>
          <button
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey
            <ArrowRight size={20} />
          </button>
        </div>
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8 w-full max-w-3xl`}>
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer text-center"
              >
                <div className={`flex flex-col items-center gap-4`}>
                  <div className={`p-4 rounded-2xl ${stat.bg}`}>
                    <IconComponent size={36} className={stat.color} />
                  </div>
                  <div>
                    <p className="text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</p>
                    <p className="text-base text-gray-400 font-semibold">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce z-10">
        <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
        <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent rounded"></div>
      </div>

      {/* Keyframes for animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
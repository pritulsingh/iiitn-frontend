import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Star, ArrowRight, MessagesSquare } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Users, label: 'Active Users', value: '2K+', color: '#60a5fa' },
    { icon: BookOpen, label: 'Study Material', value: '2,500+', color: '#34d399' },
    { icon: MessagesSquare , label: 'Discussions', value: '5K+', color: '#fbbf24' },
  ];

  const heroStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
    overflow: 'hidden',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  };

  const buttonPrimaryStyle = {
    padding: '16px 32px',
    background: 'linear-gradient(45deg, #9333ea, #ec4899)',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    fontWeight: '700',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 30px rgba(147, 51, 234, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const buttonSecondaryStyle = {
    padding: '16px 32px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    fontWeight: '700',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontWeight: '900',
    color: 'white',
    marginBottom: '1rem',
    lineHeight: '1.1',
    textAlign: 'center'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    color: '#d1d5db',
    marginBottom: '2rem',
    textAlign: 'center',
    maxWidth: '800px',
    lineHeight: '1.6'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center'
  };

  return (
    <div style={heroStyle}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '40px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '160px',
          right: '40px',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite 2s'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '30%',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(5, 150, 105, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 7s ease-in-out infinite 1s'
        }}></div>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              top: `${20 + (i * 12)}%`,
              left: `${15 + (i * 10)}%`,
              animation: `particle-float ${4 + (i * 0.5)}s ease-in-out infinite ${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '40px 20px'
      }}>


        <h1 style={titleStyle}>
          <div style={{ marginBottom: '10px' }}>Empower Your Learning Journey</div>
        </h1>

        <p style={subtitleStyle}>
          Connect with educators and peers to share, discover, and discuss study materials—all in one place. 
          <span style={{ color: '#a855f7', fontWeight: '600' }}> personalized mentorship</span>, 
          <span style={{ color: '#ec4899', fontWeight: '600' }}> hands-on projects</span>, and 
          <span style={{ color: '#3b82f6', fontWeight: '600' }}> industry connections</span>.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 640 ? 'column' : 'row',
          gap: '20px',
          marginBottom: '80px'
        }}>
          <button 
            style={buttonPrimaryStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 40px rgba(147, 51, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 30px rgba(147, 51, 234, 0.3)';
            }}
          >
            <span>Start Your Journey</span>
            <ArrowRight size={20} style={{ transition: 'transform 0.3s ease' }} />
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 640 ? '1fr' : 'repeat(3, 1fr)',
          gap: '32px',
          width: '100%',
          maxWidth: '900px'
        }}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-8px)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    padding: '16px',
                    borderRadius: '16px',
                    background: `${stat.color}20`,
                    transition: 'all 0.3s ease'
                  }}>
                    <IconComponent size={36} color={stat.color} />
                  </div>
                  <div>
                    <p style={{ 
                      fontSize: '36px', 
                      fontWeight: '900', 
                      color: 'white', 
                      margin: '0 0 8px 0',
                      letterSpacing: '-0.02em'
                    }}>
                      {stat.value}
                    </p>
                    <p style={{ 
                      fontSize: '16px', 
                      color: '#9ca3af', 
                      margin: 0, 
                      fontWeight: '600' 
                    }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        animation: 'bounce 2s ease-in-out infinite'
      }}>
        <span style={{ 
          color: '#9ca3af', 
          fontSize: '14px', 
          fontWeight: '500' 
        }}>
          Scroll to explore
        </span>
        <div style={{
          width: '2px',
          height: '32px',
          background: 'linear-gradient(to bottom, #a855f7, transparent)',
          borderRadius: '1px'
        }}></div>
      </div>

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
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(45deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0px); }
          40%, 43% { transform: translateY(-15px); }
          70% { transform: translateY(-8px); }
          90% { transform: translateY(-2px); }
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
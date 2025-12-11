import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  const words = ["Excelência", "Estratégia", "Integridade", "Resultados"];
  const period = 2000; // Tempo de espera antes de apagar

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // Velocidade de digitação
    } else {
      setDelta(isDeleting ? 50 : 150);
    }
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Law Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full md:grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gold-400 mb-8 mx-auto md:mx-0"
          />
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6 min-h-[160px] md:min-h-[auto]">
            Justiça com <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-200">
              {text}
            </span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-gold-400 ml-1 inline-block"
            >
              |
            </motion.span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            WG Advocracia oferece soluções jurídicas estratégicas e personalizadas para proteger seu patrimônio e garantir seus direitos.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            {/* Primary Button: Gold Background, White Shine */}
            <a
              href="#contact"
              className="btn-shine px-8 py-4 text-dark-900 font-bold uppercase tracking-widest text-sm rounded-sm hover:scale-105 transition-transform duration-300"
              style={{ '--btn-bg': '#D4AF37', '--shine-color': '#FFFFFF' } as React.CSSProperties}
            >
              <span className="relative z-10">Agende sua Consulta</span>
            </a>
            
            {/* Secondary Button: Dark Background, Gold Shine */}
            <a
              href="#services"
              className="btn-shine px-8 py-4 text-white uppercase tracking-widest text-sm rounded-sm hover:text-gold-400 transition-colors duration-300"
              style={{ '--btn-bg': '#0A0A0A', '--shine-color': '#D4AF37' } as React.CSSProperties}
            >
              <span className="relative z-10">Nossas Áreas</span>
            </a>
          </div>
        </motion.div>

        {/* Decorative Element / Right Side */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="hidden md:flex justify-end relative"
        >
            <div className="w-80 h-96 border border-white/10 relative p-6 backdrop-blur-sm">
                 <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold-400" />
                 <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-gold-400" />
                 <div className="h-full w-full flex flex-col justify-end">
                    <p className="font-serif text-3xl italic text-gray-400 text-right">
                      "A lei é a razão livre da paixão."
                    </p>
                    <p className="text-gold-400 text-right mt-2 text-sm uppercase tracking-widest">— Aristóteles</p>
                 </div>
            </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <ArrowDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
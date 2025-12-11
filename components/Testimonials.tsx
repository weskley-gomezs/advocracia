import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Carlos Eduardo Silva",
      role: "CEO, TechSolutions",
      text: "A equipe da Advocracia demonstrou um conhecimento técnico impressionante e uma dedicação ímpar no nosso caso de fusão empresarial. A segurança jurídica que nos proporcionaram foi fundamental."
    },
    {
      name: "Mariana Costa",
      role: "Diretora Comercial",
      text: "Fui acolhida com muito profissionalismo. A clareza nas explicações e a agilidade no processo de inventário me trouxeram muita paz em um momento delicado da minha família."
    },
    {
      name: "Roberto Mendes",
      role: "Empresário",
      text: "A assessoria tributária deles salvou minha empresa de multas indevidas. Recomendo fortemente pela seriedade, competência técnica e pelo atendimento personalizado."
    },
    {
      name: "Fernanda Lins",
      role: "Fundadora, Lins Arquitetura",
      text: "Encontrei na Advocracia parceiros estratégicos para o meu negócio. A revisão contratual que fizeram blindou nossa operação contra riscos que nem imaginávamos."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Auto-play every 6 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="bg-dark-800 relative py-12 border-t border-white/5">
      <SectionWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          
          <div className="mb-12">
            <h4 className="text-gold-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Depoimentos
            </h4>
          </div>

          <div className="relative w-full min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <Quote className="text-gold-400 w-16 h-16 mb-8 opacity-30 rotate-180" />
                
                <p className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic mb-10">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex flex-col items-center gap-2">
                   <h5 className="text-gold-400 font-bold text-lg tracking-wide uppercase">
                     {testimonials[currentIndex].name}
                   </h5>
                   <div className="h-px w-12 bg-white/20 my-1"></div>
                   <p className="text-gray-500 text-sm tracking-wider font-light">
                     {testimonials[currentIndex].role}
                   </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-12">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-all hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-gold-400 w-6' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-all hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
};

export default Testimonials;
import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';
import { ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <div id="contact" className="bg-dark-900 border-t border-white/10">
      <SectionWrapper>
        <div className="bg-gradient-to-r from-gold-900/20 to-dark-800 p-12 md:p-20 text-center border border-gold-400/20 relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Pronto para defender seus direitos?
            </h2>
            <p className="text-gray-300 text-lg mb-10 font-light">
              Agende uma consulta inicial e descubra como podemos ajudar a solucionar seus desafios jurídicos com excelência.
            </p>
            
            {/* Button container for animation since btn-shine is applied to standard elements */}
            <div className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-shine px-10 py-4 font-bold uppercase tracking-widest text-sm text-dark-900 rounded-sm"
                  style={{ '--btn-bg': '#D4AF37', '--shine-color': '#FFFFFF' } as React.CSSProperties}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Agendar Agora
                    <ArrowRight className="w-5 h-5 transition-transform" />
                  </span>
                </motion.button>
            </div>
          </div>
          
          {/* Decorative shine */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactCTA;
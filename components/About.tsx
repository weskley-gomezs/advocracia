import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about" className="bg-dark-800">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.5 }}
               className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                alt="Meeting Room"
                className="w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-400/30 z-0 hidden md:block" />
          </div>

          {/* Text Side */}
          <div>
            <h4 className="text-gold-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Quem Somos
            </h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              Tradição e Modernidade na defesa dos seus direitos.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-light">
              Na Advocracia, combinamos décadas de experiência jurídica com uma abordagem moderna e proativa. 
              Entendemos que cada caso é único e exige uma estratégia personalizada. Nosso compromisso é com a 
              transparência, ética e a busca incansável pelo melhor resultado para nossos clientes.
            </p>

            <div className="space-y-4">
              {[
                "Atendimento Personalizado e Humanizado",
                "Estratégias Jurídicas Inovadoras",
                "Foco Absoluto em Resultados",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="text-gold-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
            {[
                { title: "Missão", text: "Prover justiça através de soluções legais ágeis e eficazes." },
                { title: "Visão", text: "Ser referência nacional em advocacia empresarial e civil." },
                { title: "Valores", text: "Ética, Transparência, Excelência e Comprometimento." }
            ].map((card, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="bg-dark-900 p-8 border-t border-gold-400/20 hover:border-gold-400 transition-colors duration-300"
                >
                    <h3 className="font-serif text-2xl text-white mb-4">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
                </motion.div>
            ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
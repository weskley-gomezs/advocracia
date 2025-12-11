import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { motion } from 'framer-motion';
import { TeamMemberProps } from '../types';

const TeamCard: React.FC<TeamMemberProps> = ({ name, role, image, specialty, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer"
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
      />
      
      {/* Overlay Gradient (Default) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Static Content (Visible initially) */}
      <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500 group-hover:translate-y-full">
        <h3 className="text-xl font-serif text-white mb-1">{name}</h3>
        <p className="text-gold-400 text-sm tracking-widest uppercase">{role}</p>
      </div>

      {/* Hover Content (Slides Up) */}
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out border border-gold-400/20">
        <h3 className="text-2xl font-serif text-white mb-2">{name}</h3>
        <p className="text-gold-400 text-sm tracking-widest uppercase mb-6">{role}</p>
        
        <div className="w-12 h-0.5 bg-gold-400 mb-6" />
        
        <h4 className="text-white font-bold mb-2">Especialidade</h4>
        <p className="text-gold-400 mb-4">{specialty}</p>
        
        <p className="text-gray-300 text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  const members: TeamMemberProps[] = [
    {
      name: "Dr. Weskley Gomes",
      role: "Sócio Fundador",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      specialty: "Direito Empresarial e Tributário",
      description: "Com mais de 15 anos de experiência, lidera estratégias complexas de fusões, aquisições e planejamento tributário para grandes corporações."
    },
    {
      name: "Dra. Helena Paiva",
      role: "Advogada Sênior",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      specialty: "Direito Civil e Família",
      description: "Especialista em resolução de conflitos familiares e sucessórios, com foco em mediação e proteção patrimonial."
    },
    {
      name: "Dr. Ricardo Alencar",
      role: "Advogado Associado",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop",
      specialty: "Direito Criminal",
      description: "Atuação combativa em defesa penal econômica e crimes digitais, garantindo a preservação dos direitos fundamentais."
    }
  ];

  return (
    <div id="team" className="bg-dark-800 relative py-20 border-t border-white/5">
      <SectionWrapper>
        <div className="text-center mb-16">
          <h4 className="text-gold-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Nosso Time
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Especialistas ao seu lado
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Team;
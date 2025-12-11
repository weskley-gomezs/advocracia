import React, { useState } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, ShieldCheck, Briefcase, FileText, Building2, Users, ArrowRight, X, MessageCircle } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index, onLearnMore }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ backgroundColor: '#1E1E1E' }}
    className="group p-8 border border-white/5 bg-transparent hover:border-gold-400/50 transition-all duration-300 relative overflow-hidden flex flex-col items-start"
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform group-hover:scale-150 origin-top-right">
       {/* Background Icon Effect */}
       <div className="text-white">{icon}</div>
    </div>

    <div className="relative z-10 flex-1">
      <div className="w-12 h-12 mb-6 text-gold-400 group-hover:text-white transition-colors duration-300">
        {React.cloneElement(icon as React.ReactElement, { size: 48, strokeWidth: 1 })}
      </div>
      <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
    
    <div className="relative z-10 w-full mt-4">
      <div className="w-8 h-px bg-gold-400 group-hover:w-full transition-all duration-500 ease-out mb-6" />
      <button 
        onClick={onLearnMore}
        className="text-gold-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors group/btn"
      >
        Saiba Mais 
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: "Direito Civil",
      description: "Resolução de conflitos, contratos, responsabilidade civil e proteção de direitos individuais.",
      details: "Nossa atuação no Direito Civil é abrangente e estratégica. Focamos na elaboração de contratos blindados para garantir a segurança jurídica de suas transações, além de atuar vigorosamente em ações de responsabilidade civil, indenizações e disputas de propriedade. Seja na esfera contenciosa ou consultiva, buscamos soluções que protejam o seu patrimônio e garantam o cumprimento das obrigações, sempre com uma análise de risco detalhada e personalizada.",
      icon: <Scale />
    },
    {
      title: "Direito Empresarial",
      description: "Assessoria completa para empresas, fusões, aquisições e governança corporativa.",
      details: "No dinâmico ambiente corporativo, oferecemos uma consultoria jurídica full-service. Assessoramos desde a estruturação societária (Startups, Holdings) até complexas operações de M&A (Fusões e Aquisições). Nossa equipe é especialista em Governança Corporativa, Compliance e Recuperação Judicial, garantindo que sua empresa opere com eficiência legal, mitigando riscos e potencializando oportunidades de crescimento sustentável no mercado.",
      icon: <Building2 />
    },
    {
      title: "Direito Trabalhista",
      description: "Defesa estratégica em litígios trabalhistas e consultoria preventiva para RH.",
      details: "Atuamos de forma preventiva e contenciosa para empresas, visando a redução de passivos trabalhistas através de auditorias e reestruturação de políticas de RH. Para executivos e empregados, oferecemos defesa especializada em reclamações trabalhistas de alta complexidade. Nosso foco é a negociação sindical estratégica e a adequação às normas vigentes, garantindo um ambiente de trabalho seguro juridicamente para ambas as partes.",
      icon: <Briefcase />
    },
    {
      title: "Direito de Família",
      description: "Divórcios, inventários e planejamento sucessório com sigilo e sensibilidade.",
      details: "Compreendemos que questões familiares exigem não apenas técnica, mas tato e discrição. Especializados em Planejamento Sucessório (Testamentos e Holdings Familiares) para preservação de patrimônio entre gerações. Atuamos em divórcios consensuais e litigiosos, guarda, alimentos e inventários, sempre priorizando a resolução célere e, quando possível, extrajudicial, minimizando o desgaste emocional das partes envolvidas.",
      icon: <Users />
    },
    {
      title: "Direito Criminal",
      description: "Atuação em inquéritos policiais e processos criminais com total discrição.",
      details: "Oferecemos uma defesa criminal combativa e técnica, especializada em Direito Penal Econômico (Crimes Tributários, Lavagem de Dinheiro, Crimes Financeiros). Acompanhamos inquéritos policiais, flagrantes e atuamos em todas as instâncias judiciais, inclusive Tribunais Superiores (STJ e STF). Nossa prioridade é a liberdade e a preservação da imagem do cliente, atuando com sigilo absoluto e estratégia processual refinada.",
      icon: <ShieldCheck />
    },
    {
      title: "Direito Tributário",
      description: "Planejamento tributário, recuperação de créditos e defesa em autuações fiscais.",
      details: "Transformamos a complexidade tributária brasileira em vantagem competitiva. Realizamos um Planejamento Tributário elisivo para reduzir legalmente a carga fiscal da sua empresa. Atuamos na recuperação de créditos tributários administrativos e judiciais, além de defender vigorosamente o contribuinte contra autos de infração e execuções fiscais. Nossa análise minuciosa visa a saúde financeira e a regularidade fiscal do seu negócio.",
      icon: <FileText />
    },
  ];

  const handleWhatsAppClick = (serviceTitle: string) => {
    const message = encodeURIComponent(`Olá, gostaria de saber mais detalhes sobre a atuação em ${serviceTitle}.`);
    window.open(`https://wa.me/5561981535040?text=${message}`, '_blank');
  };

  return (
    <div id="services" className="bg-dark-900 relative">
      <SectionWrapper>
        <div className="text-center mb-16">
          <h4 className="text-gold-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Áreas de Atuação
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Expertise Jurídica Completa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              index={index} 
              {...service} 
              onLearnMore={() => setSelectedService(service)}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Modal / Inframe */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative bg-dark-800 border border-gold-400/30 w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-dark-900 p-8 border-b border-white/5 flex justify-between items-center">
                 <div className="flex items-center gap-4">
                    <div className="text-gold-400">
                      {React.cloneElement(selectedService.icon as React.ReactElement, { size: 28 })}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-white">{selectedService.title}</h3>
                 </div>
                 <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-dark-800 to-dark-900">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-200 leading-relaxed text-lg font-light text-justify">
                    {selectedService.details}
                  </p>
                </div>

                <div className="mt-12 flex flex-col items-center justify-center gap-4">
                  <p className="text-gold-400 text-sm tracking-widest uppercase font-bold">
                    Precisa de orientação especializada?
                  </p>
                  <button
                    onClick={() => handleWhatsAppClick(selectedService.title)}
                    className="btn-shine px-8 py-4 text-white font-bold uppercase tracking-wider rounded-sm hover:scale-105 transition-transform duration-300"
                    style={{ '--btn-bg': '#0f4229', '--shine-color': '#4ade80' } as React.CSSProperties}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <MessageCircle size={20} />
                      Consultar Especialista via WhatsApp
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
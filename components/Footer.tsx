import React from 'react';
import { Scale, Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
             <Scale className="w-6 h-6 text-gold-400" />
             <span className="font-serif text-xl font-bold tracking-wider text-white">
                WG <span className="text-gold-400">ADVOCRACIA</span>
             </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Excelência jurídica com compromisso ético e resultados estratégicos para você e sua empresa.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-6">Links Rápidos</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
            <li><a href="#team" className="hover:text-white transition-colors">Equipe</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
           <h4 className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-6">Contato</h4>
           <ul className="space-y-4 text-sm text-gray-400">
             <li className="flex items-start gap-3">
               <MapPin className="w-4 h-4 mt-1 text-gold-400" />
               <span>Av. Paulista, 1000 - 15º Andar<br/>São Paulo, SP</span>
             </li>
             <li className="flex items-center gap-3">
               <Phone className="w-4 h-4 text-gold-400" />
               <span>(61) 98153-5040</span>
             </li>
             <li className="flex items-center gap-3">
               <Mail className="w-4 h-4 text-gold-400" />
               <span>contato@wgadvocracia.com.br</span>
             </li>
           </ul>
        </div>

        {/* Socials */}
        <div>
           <h4 className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-6">Redes Sociais</h4>
           <div className="flex gap-4">
             <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-gold-400 hover:border-gold-400 hover:text-dark-900 transition-all">
                <Instagram size={18} />
             </a>
             <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-gold-400 hover:border-gold-400 hover:text-dark-900 transition-all">
                <Linkedin size={18} />
             </a>
             <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-gold-400 hover:border-gold-400 hover:text-dark-900 transition-all">
                <Facebook size={18} />
             </a>
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; 2025 WG Advocracia. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0 opacity-70 hover:opacity-100 transition-opacity">
          @2025 feito por Weskley gomes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
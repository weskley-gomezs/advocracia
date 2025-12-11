import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-dark-900 flex items-center justify-center flex-col"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative">
             <motion.div 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-gold-400"
             >
                <Scale size={64} strokeWidth={1} />
             </motion.div>
             
             {/* Circular ripple */}
             <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-gold-400"
             />
        </div>

        <div className="text-center overflow-hidden">
             <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-serif text-3xl font-bold tracking-wider text-white"
             >
                WG <span className="text-gold-400">ADVOCRACIA</span>
             </motion.h1>
             <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-0.5 bg-gold-400 mt-2 mx-auto"
             />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
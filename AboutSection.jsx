import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '50+', label: 'Projetos Concluídos' },
    { number: '5+', label: 'Anos de Experiência' },
    { number: '30+', label: 'Clientes Satisfeitos' },
    { number: '100%', label: 'Dedicação' }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvedor com mais de 5 anos de experiência criando soluções web modernas
            e aplicações mobile. Especializado em React, Node.js e tecnologias cloud.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img   
              className="rounded-2xl shadow-2xl floating"
              alt="Desenvolvedor Bruno Moretti trabalhando em computador com código na tela"
             src="https://images.unsplash.com/photo-1498502153174-e65bbd350bd3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Transformando ideias em realidade digital
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Minha paixão é criar experiências digitais que não apenas funcionam perfeitamente,
                mas também encantam os usuários. Trabalho com as tecnologias mais modernas
                para entregar soluções escaláveis e performáticas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
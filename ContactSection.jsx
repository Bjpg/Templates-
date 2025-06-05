import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato, Bruno Moretti. Retornarei em breve!",
    });
    e.target.reset();
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'brunolinny927@gmail.com', href: 'mailto:brunolinny927@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/brunomoretti', href: 'https://github.com/brunomoretti' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/brunomoretti', href: 'https://linkedin.com/in/brunomoretti' }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades.
            Entre em contato e vamos criar algo incrível!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a 
                    key={label} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium">{label}</div>
                      <div className="text-purple-200 group-hover:text-white transition-colors">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 glass-effect rounded-2xl">
              <h4 className="text-lg font-bold mb-4">Disponibilidade</h4>
              <p className="text-purple-100">
                Atualmente disponível para projetos freelance e oportunidades
                de trabalho remoto. Respondo em até 24 horas!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-purple-200"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-purple-200"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Assunto</label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-purple-200"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-purple-200 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-white text-purple-900 hover:bg-gray-100 font-bold py-3"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
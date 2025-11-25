import React from 'react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gray to-brand-black opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Quer elevar a identidade visual <br />
            da sua empresa ao <span className="text-brand-orange">próximo nível?</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Podemos te ajudar a estruturar uma identidade visual completa, alinhada ao posicionamento, ao público e aos objetivos de escala da sua empresa.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col items-center gap-6">
            <Button 
              href={WHATSAPP_LINK} 
              variant="primary" 
              className="px-10 py-5 text-lg"
            >
              <MessageCircle className="mr-2" />
              Falar com um especialista no WhatsApp
            </Button>
            
            <p className="text-sm text-gray-500 mt-4">
              Descompliquei - Estratégia e Design. <br/>
              Todos os direitos reservados.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
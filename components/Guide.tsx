import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { CheckItem } from '../types';
import { CheckSquare, ArrowRight } from 'lucide-react';

const checklistItems: CheckItem[] = [
  { question: "Minha marca é reconhecida sem o logo?", subtext: "Pelas cores, fontes ou elementos." },
  { question: "Todas as peças falam a mesma língua?", subtext: "Site, Instagram e Ads parecem da mesma empresa." },
  { question: "O cliente entende meu posicionamento em 3s?", subtext: "Se sou premium, popular, tech ou humanizado." },
  { question: "Eu sei qual emoção minha marca comunica?", subtext: "Confiança, alegria, seriedade ou inovação." }
];

export const Guide: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Guia Rápido do <span className="text-brand-orange">Branding que Vende</span>
            </h2>
            
            <div className="space-y-8">
              <div className="bg-brand-gray/50 p-6 rounded-xl border-l-4 border-brand-orange">
                <h3 className="text-xl font-semibold mb-2">1. Paleta Inteligente</h3>
                <p className="text-gray-400">Não escolha cores. Escolha sensações. Use a regra 60-30-10: 60% cor base (neutra), 30% cor secundária, 10% cor de destaque (CTA).</p>
              </div>
              
              <div className="bg-brand-gray/50 p-6 rounded-xl border-l-4 border-white">
                <h3 className="text-xl font-semibold mb-2">2. Padrão de Layouts</h3>
                <p className="text-gray-400">Defina templates mestres. Isso acelera a produção e cria repetição visual. Repetição gera memória.</p>
              </div>

              <div className="bg-brand-gray/50 p-6 rounded-xl border-l-4 border-gray-500">
                <h3 className="text-xl font-semibold mb-2">3. Ruído Zero</h3>
                <p className="text-gray-400">O design deve facilitar a leitura, não competir com ela. Espaço em branco é luxo. Use-o.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-brand-black p-8 md:p-10 rounded-3xl border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange blur-[80px] opacity-20 pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-800">
                <CheckSquare className="text-brand-orange" />
                <h3 className="text-2xl font-bold">Checklist de Maturidade</h3>
              </div>

              <div className="space-y-6">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded border border-gray-600 mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-lg">{item.question}</p>
                      <p className="text-sm text-gray-500">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 bg-brand-orange/10 rounded-lg border border-brand-orange/20">
                <p className="text-sm text-brand-orange flex items-center gap-2 font-medium">
                  <ArrowRight size={16} />
                  Se você marcou menos de 3 itens, sua marca está perdendo dinheiro na mesa.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
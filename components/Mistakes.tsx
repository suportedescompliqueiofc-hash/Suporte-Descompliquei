import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { XCircle, AlertTriangle } from 'lucide-react';
import { Mistake } from '../types';

const mistakesList: Mistake[] = [
  {
    title: "Mistura de Estilos",
    description: "Elementos visuais que não conversam entre si, criando confusão mental no cliente."
  },
  {
    title: "Cores sem Estratégia",
    description: "Uso de cores baseadas em gosto pessoal, ignorando a psicologia do consumidor."
  },
  {
    title: "Desconexão nos Canais",
    description: "O Instagram não parece ser da mesma empresa que o site ou os anúncios."
  },
  {
    title: "Branding Genérico",
    description: "Criação visual sem análise prévia de posicionamento, público e diferenciação."
  }
];

export const Mistakes: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light text-brand-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4 text-brand-orange font-semibold">
              <AlertTriangle size={20} />
              <span>Diagnóstico Inicial</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que a maioria dos empresários erra
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              A falta de padronização não é apenas um problema estético. <br/>
              <span className="font-semibold text-brand-black">É um problema financeiro.</span> Inconsistência gera desconfiança, e desconfiança trava vendas.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {mistakesList.map((mistake, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{mistake.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {mistake.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
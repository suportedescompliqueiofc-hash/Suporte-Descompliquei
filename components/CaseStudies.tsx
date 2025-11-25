import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: "Taxa de Clique (CTR)", value: "+35%", sub: "em anúncios com visual otimizado" },
  { label: "Percepção de Valor", value: "3x", sub: "mais probabilidade de aceitar ticket alto" },
  { label: "Retenção de Marca", value: "80%", sub: "aumento no recall pós-visualização" }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black">
              O impacto nos números
            </h2>
            <p className="text-gray-500 mt-2">Médias observadas em reestruturações visuais estratégicas</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-brand-orange">
                <p className="text-gray-500 font-medium mb-2">{stat.label}</p>
                <div className="text-5xl font-bold text-brand-black mb-2 tracking-tight">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400">{stat.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
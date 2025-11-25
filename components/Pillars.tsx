import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Pillar } from '../types';
import { Palette, Type, Layers, LayoutGrid, MonitorSmartphone } from 'lucide-react';

const pillarsData: Pillar[] = [
  {
    title: "Cores Intencionais",
    description: "Paletas desenvolvidas não por gosto, mas por psicologia, posicionamento e emoção desejada.",
    icon: <Palette size={24} />
  },
  {
    title: "Tipografia Consistente",
    description: "Fontes que reforçam a personalidade da marca e garantem legibilidade em qualquer meio.",
    icon: <Type size={24} />
  },
  {
    title: "Elementos Proprietários",
    description: "Formas, padrões e ícones exclusivos que tornam sua marca reconhecível mesmo sem o logo.",
    icon: <Layers size={24} />
  },
  {
    title: "Sistema Modular",
    description: "Uma estrutura visual flexível feita para escalar a produção de conteúdo sem perder o padrão.",
    icon: <LayoutGrid size={24} />
  },
  {
    title: "Aplicação Real",
    description: "Identidade pensada para funcionar onde a venda acontece: anúncios, redes sociais e sites.",
    icon: <MonitorSmartphone size={24} />
  }
];

export const Pillars: React.FC = () => {
  return (
    <section className="py-24 bg-white text-brand-black">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que compõe uma <br/> <span className="text-brand-orange">Identidade Visual Estratégica</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Não entregamos apenas "artes bonitas". Entregamos um sistema visual completo preparado para o crescimento.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillarsData.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-orange shadow-sm mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
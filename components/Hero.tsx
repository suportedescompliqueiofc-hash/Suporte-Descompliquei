import React from 'react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const benefits = ["Aumente a percepção de valor", "Atraia o cliente certo", "Venda mais caro"];

  const scrollToFooter = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden pt-20 pb-10">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-orange/20 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 size={14} className="text-brand-orange" />
                {benefit}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Identidade Visual <br />
            <span className="text-gray-500">não é estética.</span> <br />
            <span className="text-brand-orange">É performance.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Segundo estudos de comportamento de consumo, até <span className="text-white font-semibold">20% da decisão de compra</span> é influenciada diretamente pela identidade visual. Marcas com comunicação alinhada convertem mais, escalam mais e cobram mais.
          </p>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToFooter}>
              Quero aprender como aplicar isso
            </Button>
            <button onClick={scrollToFooter} className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 mt-4 sm:mt-0">
              Falar com especialista <ArrowDown size={16} />
            </button>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ArrowDown className="text-white" size={24} />
      </div>
    </section>
  );
};
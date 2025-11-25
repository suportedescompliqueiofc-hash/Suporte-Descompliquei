import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { BrainCircuit, TrendingUp } from 'lucide-react';

export const Insight: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-dark to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1 rounded-full text-sm font-medium mb-6">
                <BrainCircuit size={16} />
                <span>Neurociência do Consumo</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                O Efeito dos 20%
              </h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  O cérebro humano é uma máquina de economizar energia. Ele toma decisões baseadas em padrões e reconhecimento rápido.
                </p>
                <p>
                  Uma identidade visual forte funciona como um atalho cognitivo: <strong className="text-white">reduz o esforço mental</strong> necessário para o cliente escolher você.
                </p>
                <div className="pl-4 border-l-2 border-brand-orange">
                  <p className="italic text-white">
                    "Consistência visual cria território mental: o cliente lembra, confia e compra."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 w-full">
            <FadeIn direction="left" delay={200}>
              <div className="bg-brand-dark p-8 rounded-2xl border border-white/5 relative">
                <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                  <TrendingUp className="text-brand-orange" />
                  Influência na Decisão
                </h3>
                
                <div className="space-y-6">
                  {/* Chart Item 1 */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Sem Identidade Definida</span>
                      <span>Baixa Conversão</span>
                    </div>
                    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-600 w-[5%]"></div>
                    </div>
                  </div>

                  {/* Chart Item 2 */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Identidade Genérica</span>
                      <span>Média Conversão</span>
                    </div>
                    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500 w-[12%]"></div>
                    </div>
                  </div>

                  {/* Chart Item 3 */}
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-brand-orange mb-2">
                      <span>Identidade Estratégica</span>
                      <span>+20% Influência</span>
                    </div>
                    <div className="h-4 bg-gray-800 rounded-full overflow-hidden relative">
                      <div className="absolute top-0 left-0 h-full bg-brand-orange w-[85%] shadow-[0_0_15px_#ff6f20]"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right">
                      *Dados baseados em estudos de comportamento
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
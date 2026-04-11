import { Check, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { Suspense, lazy } from 'react';

const BelowFold = lazy(() => import('./components/BelowFold').then(m => ({ default: m.BelowFold })));

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden select-none">
      {/* 1. Faixa de Alerta - RED FOR URGENCY */}
      <div className="bg-[#e31c1c] text-white text-center py-4 px-4 font-bold text-sm leading-tight">
        Atenção! <span className="text-[#f1c40f]">Aproveite hoje</span> por <span className="text-white font-black underline">R$ 37,90</span> para garantir o <span className="text-[#f1c40f]">DESCONTO</span>.
      </div>

      {/* 2. Headline Section - DARK NAVY BACKGROUND */}
      <section className="bg-[#0a192f] text-center py-12 px-6">
        <p className="text-[#2ecc71] font-black uppercase tracking-[0.2em] mb-4 text-sm sm:text-base">
          Manual do Tutor de Elite
        </p>
        <h1 className="headline text-white max-w-4xl mx-auto">
          40 Receitas e Protocolos Prontos para <span className="text-[#2ecc71]">Blindar a Saúde</span> do seu Pet e Economizar Milhares em Veterinário
        </h1>

        {/* Mockup Image - Optimized for LCP */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <img 
              src="/hero-mockup.webp" 
              alt="Manual do Tutor de Elite Mockup" 
              width="672"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
            />
          </div>
        </div>

        <p className="text-lg sm:text-xl font-bold mb-10 text-white max-w-3xl mx-auto leading-relaxed">
          O guia prático para transformar você em um Tutor de Elite: aprenda a identificar doenças em segundos, tratar emergências em casa e economizar com alimentação e higiene inteligente.
        </p>

        <a href="https://pay.cakto.com.br/bvtp9cm_843157" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs mx-auto mb-12">
          <motion.button 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white font-black py-5 rounded-md shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 transition-all text-lg uppercase"
          >
            <Check className="w-6 h-6 stroke-[4px]" />
            QUERO MINHAS RECEITAS AGORA
          </motion.button>
        </a>

        {/* 2.1 Conexão Imediata - Quick Bullets */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-[#f1c40f] font-black text-xl sm:text-2xl mb-8 uppercase tracking-tighter">
            COMBO EXCLUSIVO! + 2 BÔNUS GRÁTIS!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex gap-3">
                <span className="text-2xl shrink-0">🍎</span>
                <p className="text-sm sm:text-base text-slate-200 leading-snug">
                  <span className="text-[#2ecc71] font-black uppercase block mb-1 text-xs">Culinária Funcional:</span>
                  Receitas estratégicas para blindar a imunidade e prolongar a vida.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex gap-3">
                <span className="text-2xl shrink-0">🛡️</span>
                <p className="text-sm sm:text-base text-slate-200 leading-snug">
                  <span className="text-[#f1c40f] font-black uppercase block mb-1 text-xs">Emergências:</span>
                  Salve seu pet em engasgos, envenenamentos e crises.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex gap-3">
                <span className="text-2xl shrink-0">💰</span>
                <p className="text-sm sm:text-base text-slate-200 leading-snug">
                  <span className="text-[#2ecc71] font-black uppercase block mb-1 text-xs">Economia Real:</span>
                  Poupe até R$ 2.450 evitando consultas e exames desnecessários.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-sm font-bold text-slate-300">
          <p className="uppercase tracking-widest">Pagamento Único | Acesso imediato e vitalício.</p>
        </div>
      </section>

      <Suspense fallback={<div className="py-20 text-center text-gray-400">Carregando conteúdo...</div>}>
        <BelowFold />
      </Suspense>
    </main>
  );
}

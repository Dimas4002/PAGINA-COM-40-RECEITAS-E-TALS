import { Check, ShieldCheck, Lock, Heart, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

export function BelowFold() {
  return (
    <>
      {/* Section 2: Connection Section - VERY LIGHT GRAY BACKGROUND */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 leading-tight text-[#0a192f]">"Por que este é o Plano Definitivo para você e seu Pet?"</h2>
          <div className="space-y-6 text-gray-800 leading-relaxed text-lg text-center">
            <p>
              Você clicou porque quer oferecer o melhor para o seu pet através da alimentação. Mas um verdadeiro Guardião sabe que a saúde começa no pote de comida e termina na segurança de saber o que fazer em um momento de aperto.
            </p>
            <p className="font-bold text-[#0a192f]">
              Nosso guia transforma você: você aprenderá as receitas que economizam com rações terapêuticas e, de bônus, dominará os protocolos para engasgos e primeiros socorros. É o único material que une Nutrição Estratégica, Emergências e Economia Real em um só lugar.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The 3 Pillars - WHITE BACKGROUND */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 leading-tight text-[#0a192f]">Por que este é o Plano Definitivo?</h2>
          
          <div className="space-y-20">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#2ecc71]/10 p-6 rounded-full mb-6">
                <Heart className="w-12 h-12 text-[#2ecc71]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4 uppercase">Saúde e Longevidade</h3>
              <p className="text-gray-600 text-lg">Diagnósticos visuais de 60 segundos e nutrição estratégica para evitar doenças antes que elas apareçam.</p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1e3a8a]/10 p-6 rounded-full mb-6">
                <TrendingDown className="w-12 h-12 text-[#1e3a8a]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4 uppercase">Economia Real no Bolso</h3>
              <p className="text-gray-600 text-lg">Aprenda a cuidar da higiene clínica e a fazer produtos seguros em casa, reduzindo custos desnecessários.</p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#2ecc71]/10 p-6 rounded-full mb-6">
                <ShieldCheck className="w-12 h-12 text-[#2ecc71]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4 uppercase">Segurança em Emergências</h3>
              <p className="text-gray-600 text-lg">Tenha o sangue frio e a técnica certa (Heimlich e Primeiros Socorros) para agir quando cada segundo conta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <div className="py-16 px-8 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2ecc71] mb-8 uppercase">Aprovado:</h2>
        <p className="text-xl font-bold leading-tight text-[#0a192f]">
          Conteúdo Original Edição 2026 baseado em Diretrizes de Bem-Estar Veterinário e Protocolos de Elite.
        </p>
        
        {/* Bonus Image - Lazy Loaded */}
        <div className="mt-10 flex justify-center">
          <img 
            src="/bonus-image.webp" 
            alt="Bônus Exclusivos" 
            width="1024"
            height="500"
            loading="lazy"
            className="w-full max-w-5xl h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Section 4: Checklist & Offer Section - DARK NAVY BACKGROUND */}
      <section className="py-20 px-8 bg-[#0a192f] text-white text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">Tudo o que você recebe no Manual do Tutor de Elite:</h2>
          
          {/* eBook Image - Lazy Loaded */}
          <div className="mb-10 flex justify-center">
            <img 
              src="/hero-mockup.webp" 
              alt="eBook Mockup" 
              width="576"
              height="430"
              loading="lazy"
              className="w-full max-w-xl h-auto drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
            />
          </div>

          <p className="text-xl mb-10 font-medium">Comprar o E-book é fácil, prático e 100% seguro.</p>
          
          <div className="space-y-4 text-left mb-16 px-4">
            {[
              { text: 'GUIA DE NUTRIÇÃO E RECEITAS: O segredo da alimentação que cura e previne.', bonus: false },
              { text: 'DIAGNÓSTICO VISUAL DE 60 SEGUNDOS: Aprenda a ler o corpo do seu pet diariamente.', bonus: false },
              { text: 'PROTOCOLO DE PRIMEIROS SOCORROS: Guia passo a passo para agir sob pressão.', bonus: false },
              { text: 'ESTRATÉGIAS DE ECONOMIA: Como cuidar da higiene e estética em casa com segurança.', bonus: false },
              { text: '7 Dias de Garantia Incondicional', bonus: false },
              { text: 'Bônus 1: Guia do Cão Calmo e Equilibrado', bonus: true },
              { text: 'Bônus 2: Culinária e Estética Natural', bonus: true },
              { text: 'Acesso Vitalício e Imediato', bonus: false }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-[#2ecc71] rounded-full p-0.5 shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white stroke-[4px]" />
                </div>
                <span className={`font-bold text-lg leading-tight ${item.bonus ? 'text-[#f1c40f]' : 'text-white'}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Block inside the same section */}
          <div className="mb-16">
            <p className="text-2xl font-black mb-8 text-[#2ecc71] uppercase tracking-tight">
              E-book completo na promoção de R$ 37,90
            </p>
            
            <a href="https://pay.cakto.com.br/bvtp9cm_843157" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs mx-auto">
              <motion.button 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white font-black py-5 rounded-md shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 transition-all text-xl uppercase"
              >
                <Check className="w-6 h-6 stroke-[4px]" />
                EU QUERO SER UM TUTOR DE ELITE
              </motion.button>
            </a>
            <p className="mt-4 text-sm font-bold text-slate-400 uppercase tracking-widest">Pagamento Único | Acesso imediato e vitalício.</p>
          </div>
        </div>
      </section>

      {/* Guarantee Section - LIGHT GRAY BACKGROUND */}
      <section className="py-20 px-8 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 leading-tight text-[#0a192f]">Satisfação garantida ou seu dinheiro de volta</h2>
        <div className="flex justify-center mb-10">
          <div className="w-96 h-96 relative flex items-center justify-center">
            <img 
              src="/guarantee-seal.webp" 
              alt="Garantia 7 Dias" 
              width="384"
              height="384"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-gray-800 max-w-md mx-auto leading-relaxed font-bold text-lg text-center">
          Confiamos tanto na eficácia do manual que caso você utilize ele durante <span className="text-[#e31c1c]">7 dias</span> e não aprenda algo que proteja seu pet, <span className="text-[#e31c1c]">devolvemos o seu dinheiro</span>. Isso mesmo!
        </p>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 text-center bg-white border-t border-gray-100">
        <p className="text-sm font-bold text-[#0a192f] mb-12 uppercase tracking-widest">COMPRA 100% SEGURA</p>
        
        <div className="space-y-4 mb-16 text-left max-w-xs mx-auto">
          <div className="flex flex-col gap-4">
            <a href="#" className="block text-base font-bold text-gray-900 hover:text-[#1e3a8a] transition-colors">➤ Aviso Legal</a>
            <a href="#" className="block text-base font-bold text-gray-900 hover:text-[#1e3a8a] transition-colors">➤ Políticas de Privacidade</a>
            <a href="#" className="block text-base font-bold text-gray-900 hover:text-[#1e3a8a] transition-colors">➤ Termos e Condições</a>
          </div>
        </div>

        <p className="text-[10px] text-gray-400 font-bold">
          © 2026 Manual do Tutor de Elite - Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  MapPin, 
  GlassWater, 
  Ticket, 
  ChevronRight, 
  Star, 
  Check, 
  Cpu, 
  ShieldCheck,
  Coffee,
  Beer,
  Music4
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/50 transition-colors"
  >
    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
      <Icon className="text-indigo-400" size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const PricingCard = ({ 
  level, 
  price, 
  description, 
  tokens, 
  benefits, 
  isPopular = false 
}: { 
  level: string, 
  price: string, 
  description: string, 
  tokens: string, 
  benefits: { icon: any, text: string }[],
  isPopular?: boolean 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-8 rounded-[2rem] border ${isPopular ? 'border-indigo-500 bg-indigo-500/5 shadow-2xl shadow-indigo-500/10' : 'border-white/10 bg-gradient-to-b from-white/5 to-transparent'} relative overflow-hidden flex flex-col`}
  >
    {isPopular && (
      <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-bl-lg">
        Recomendado
      </div>
    )}
    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">{description}</p>
    <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{level}</h3>
    <div className="flex items-baseline mb-6">
      <span className="text-4xl font-bold text-white">{price}</span>
      <span className="text-slate-500 text-sm ml-2 font-medium">/mes</span>
    </div>
    <div className="space-y-4 mb-8 flex-1">
      <div className="text-indigo-400 font-bold flex items-center gap-2 text-sm uppercase tracking-tighter">
        <Zap size={16} fill="currentColor" />
        {tokens} Tokens de acceso
      </div>
      {benefits.map((benefit, idx) => (
        <div key={idx} className="flex gap-3 text-slate-300 items-center">
          <div className="w-5 h-5 flex items-center justify-center shrink-0">
            <benefit.icon className={isPopular ? "text-indigo-400" : "text-slate-500"} size={16} />
          </div>
          <span className="text-xs font-medium leading-tight">{benefit.text}</span>
        </div>
      ))}
    </div>
    <button 
      className={`w-full py-4 rounded-xl font-bold transition-all ${isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20' : 'bg-white/10 text-white hover:bg-white/20'}`}
    >
      Elegir este Plan
    </button>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
              <Zap size={22} fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tight uppercase">Menbresia<span className="text-indigo-500 underline underline-offset-4 decoration-2 italic">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#solucion" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Solución</a>
            <a href="#features" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Beneficios</a>
            <a href="#pricing" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Precios</a>
            <a 
              href="https://drive.google.com/file/d/1Hc-ChEHS5tstJMyEkZ8cNfwTEsdn2cTO/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-slate-200 transition-colors inline-block text-center"
            >
              Acceso Beta
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-20 blur-[120px] bg-indigo-500/20 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="tracking-[0.15em]">Powered by Fahed Hermoza</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight text-white mb-10 leading-[0.95]"
          >
            POTENCIA TU <br /> 
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 italic">VIDA PREMIUM</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            La infraestructura definitiva para gestionar el Cusco exclusivo. Automatización nativa y análisis predictivo para tu experiencia VIP.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="https://drive.google.com/file/d/1Hc-ChEHS5tstJMyEkZ8cNfwTEsdn2cTO/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 text-lg uppercase tracking-tight"
            >
              Empezar Gratis <ChevronRight size={20} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1Hc-ChEHS5tstJMyEkZ8cNfwTEsdn2cTO/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all uppercase tracking-tight inline-block text-center"
            >
              Ver Demo Local
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Locations Preview */}
      <section className="py-24 bg-slate-950 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-md">
              <div className="inline-block px-3 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-4">Feed en tiempo real</div>
              <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">EXPLORACIÓN INTELIGENTE</h2>
              <p className="text-slate-500 font-medium leading-relaxed">Nuestra IA analiza el hype de la ciudad para garantizar tu acceso en los lugares más icónicos.</p>
            </div>
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center text-slate-400"><MapPin size={20} /></div>
              <div className="w-12 h-12 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center text-slate-400"><GlassWater size={20} /></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Laguna Humantay", meta: "Gold Member Extra", image: "/public/laguna-humantay.jpg" },
              { name: "Three Monkeys Coffee", meta: "15% desc. en Café especial", image: "/public/three-monkeys-coffe.jpg" },
              { name: "Morena Peruvian Kitchen", meta: "Pisco Sour de bienvenida", image: "/public/morena-peruvian-kitchen.jpg" },
            ].map((loc, i) => (
              <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent z-10" />
                <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-full bg-indigo-500/80 text-[10px] font-black text-white uppercase tracking-[0.2em] backdrop-blur-sm">
                  VIP Spot
                </div>
                <div className="absolute bottom-8 left-8 z-20 pr-8">
                  <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">{loc.name}</h4>
                  <p className="text-indigo-400 text-xs font-bold flex items-center gap-2 uppercase tracking-widest">
                    <Star size={12} fill="currentColor" /> {loc.meta}
                  </p>
                </div>
                <img 
                  src={loc.image} 
                  alt={loc.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase / Screenshots Section */}
      <section className="py-32 px-10 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-6">LA EXPERIENCIA <span className="text-indigo-500">EN TU MANO</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto uppercase tracking-wider text-sm">Controla tus privilegios desde una interfaz diseñada para la velocidad y el estatus.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { img: "/public/screenshot_01.jpg", title: "Feed VIP" },
              { img: "/public//screenshot_07.jpg", title: "Detail Card" },
              { img: "/public//screenshot_08.jpg", title: "Merchant PIN" },
              { img: "/public//screenshot_05.jpg", title: "Membresía" }
            ].map((shot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 50 }}
                className="relative group"
              >
                {/* Phone Frame */}
                <div className="relative mx-auto border-4 border-slate-800 bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[9/19] ring-1 ring-white/5">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-4 bg-slate-800 rounded-b-xl z-30" />
                  <img 
                    src={shot.img} 
                    alt={shot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">{shot.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="solucion" className="py-32 px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] italic">
              LAS PLATAFORMAS ACTUALES <br /> <span className="text-slate-600">SON ESTÁTICAS</span>
            </h2>
            <div className="space-y-4">
              {[
                { title: "El Problema", desc: "No entienden el comportamiento del usuario ni anticipan cancelaciones de acceso." },
                { title: "Inconsistencia", desc: "Falta de estatus real para usuarios premium en entornos de alta demanda." },
                { title: "Sin Inteligencia", desc: "Procesos manuales de reserva que quitan la magia a la experiencia." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-colors hover:border-white/20">
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2">{item.title}</p>
                  <p className="text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 bg-indigo-600/10 border border-indigo-600/30 rounded-[3rem] relative">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-indigo-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-indigo-600/40">
              <Zap className="text-white" size={40} fill="currentColor" />
            </div>
            <h3 className="text-4xl font-black mb-8 text-white tracking-tight uppercase leading-tight italic">Nuestra Solución <br/><span className="text-sm font-bold text-indigo-400 uppercase tracking-[0.3em] block mt-2">IA Predictiva Nativa</span></h3>
            <p className="text-indigo-100 text-lg leading-relaxed mb-10 font-medium opacity-80">
              IA que automatiza el onboarding, personaliza el contenido y optimiza tu tiempo. Nuestra red gestiona **Tokens de acceso** para asegurar espacios donde otros no pueden entrar.
            </p>
            <ul className="space-y-5">
              {[
                "Tokens canjeables de alto valor",
                "Digital Pass QR en tiempo real",
                "Recomendaciones geocalizadas",
                "Integración nativa con locales"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-black italic uppercase tracking-wider text-xs">
                  <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <Check className="text-indigo-400" size={16} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-10 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 text-center">
            <div className="w-20 h-[1px] bg-indigo-500/30 md:block hidden" />
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">INFRAESTRUCTURA VIP</h2>
            <div className="w-20 h-[1px] bg-indigo-500/30 md:block hidden" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Ticket} 
              title="Anroid + Firebase" 
              description="Arquitectura robusta y escalable diseñada para alta concurrencia y seguridad de datos." 
            />
            <FeatureCard 
              icon={MapPin} 
              title="Insights de IA" 
              description="IA analiza las interacciones para ofrecer recomendaciones personalizadas." 
            />
            <FeatureCard 
              icon={Cpu} 
              title="IA Predictiva" 
              description="Anticipamos las mejores zonas basándonos en ocupación y tendencia real." 
            />
            <FeatureCard 
              icon={Zap} 
              title="Prioridad VIP" 
              description="Estatus digital que te pone al frente de la cola de forma automatizada." 
            />
          </div>
        </div>
      </section>

      {/* Pricing / Membership */}
      <section id="pricing" className="py-32 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">Membresías Modernas</div>
          <h2 className="text-6xl font-black mb-6 italic uppercase tracking-tighter">NIVEL DE ACCESO</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-tight uppercase font-medium tracking-wide">
            Potencia tu comunidad con <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Inteligencia Artificial aplicada.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <PricingCard 
            level="DISCOVERY PASS"
            description="Pago Único"
            price="S/9.90"
            tokens="10"
            benefits={[
              { icon: Coffee, text: "Café especial + acompañamiento" },
              { icon: GlassWater, text: "Cóctel de firma o vuelo de carft beer" },
              { icon: Music4, text: "Cover + bebida de bienvenida incluida" }
            ]}
          />
          <PricingCard 
            level="VIBE MENBER"
            description="Subcripción Mensual"
            price="S/19.90"
            tokens="15"
            isPopular={true}
            benefits={[
              { icon: Zap, text: "Entrada o bebida gratis (Lun-Jue)" },
              { icon: GlassWater, text: "2x1 cócteles hasta las 9 PM" },
              { icon: Music4, text: "Entrada libre ($0 cover) antes de medianoche" }
            ]}
          />
          <PricingCard 
            level="GOLD SELECT"
            description="Subcripción Mensual"
            price="S/49.90"
            tokens="30"
            benefits={[
              { icon: Coffee, text: "Reserva de mesa + americano gratis" },
              { icon: GlassWater, text: "Flast Tasting + mesa reservada" },
              { icon: Star, text: "Fast-Pass + acceso exclusivo al bar" }
            ]}
          />
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="h-20 border-t border-white/5 bg-black/40 backdrop-blur-sm px-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] italic shrink-0">Tecnologías:</span>
          <div className="flex gap-10 opacity-30 hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden">
            <span className="text-xs font-mono font-bold tracking-tighter uppercase">Kotlin Multiplatform</span>
            <span className="text-xs font-mono font-bold tracking-tighter uppercase">OpenAI SDK</span>
            <span className="text-xs font-mono font-bold tracking-tighter uppercase">Firebase Connect</span>
            <span className="text-xs font-mono font-bold tracking-tighter uppercase">PostgreSQL</span>
          </div>
        </div>
        <div className="hidden lg:block text-[10px] text-slate-600 font-black italic uppercase tracking-widest">
          The future of subscriptions
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-10 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={20} fill="currentColor" />
              </div>
              <span className="text-2xl font-black uppercase italic">MENBRESIA<span className="text-indigo-500 font-black">AI</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-medium">Redefiniendo la infraestructura de suscripciones modernas a través de automatización inteligente nativa.</p>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all cursor-pointer">
                  <Star size={18} />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white text-xs font-black mb-8 uppercase tracking-[0.3em]">Producto</h4>
              <ul className="space-y-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">API Docs</a></li>
                <li><a href="https://drive.google.com/file/d/1Hc-ChEHS5tstJMyEkZ8cNfwTEsdn2cTO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">App Beta</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-black mb-8 uppercase tracking-[0.3em]">Compañía</h4>
              <ul className="space-y-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Partners VIP</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 text-center px-4">
          <div className="text-[10px] text-slate-600 uppercase tracking-[0.5em] font-black italic">
            © 2026 Menbresia AI — El futuro de las suscripciones inteligentes. Hecho en Cusco.
          </div>
        </div>
      </footer>
    </div>
  );
}

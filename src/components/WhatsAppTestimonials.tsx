import { useState, useRef } from 'react'
import { CheckCheck, MoreVertical, Phone, Video, ChevronLeft, ChevronRight } from 'lucide-react'
import { siteConfig } from '../config/siteData'

export default function WhatsAppTestimonials() {
  const { whatsappSection } = siteConfig
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Duplicamos as mensagens para o efeito de marquee infinito contínuo
  const doubleMessages = [...whatsappSection.messages, ...whatsappSection.messages]

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -340 : 340
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="px-4 py-14 sm:py-20 bg-[#faf8f5] overflow-hidden" id="depoimentos">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight text-[#141c2b]">
          {whatsappSection.title}
        </h2>
        <p className="mt-2 text-center text-sm sm:text-base text-slate-600">
          {whatsappSection.subtitle}
        </p>

        {/* Controles de Navegação do Carrossel */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white shadow-xs hover:bg-slate-100 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Deslize ou aguarde a rolagem
          </span>
          <button
            onClick={() => scroll('right')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white shadow-xs hover:bg-slate-100 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        {/* ─── CARROSSEL DE DEPOIMENTOS (WHATS-MARQUEE) ─── */}
        <div
          className="marquee-container mt-8"
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="whats-marquee-track"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {doubleMessages.map((item, idx) => (
              <div
                key={idx}
                className="flex-none w-80 sm:w-96 overflow-hidden rounded-2xl border border-[#d1d7db] shadow-md bg-[#efeae2] text-left transition-transform hover:scale-[1.01]"
              >
                {/* WhatsApp App Header Bar com Foto Real */}
                <div className="bg-[#075e54] px-4 py-3 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-10 w-10 rounded-full object-cover border-2 border-white/60"
                        loading="lazy"
                      />
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight">{item.name}</p>
                      <p className="text-[11px] text-emerald-100">Online hoje</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100">
                    <Video className="h-4 w-4 opacity-80" />
                    <Phone className="h-4 w-4 opacity-80" />
                    <MoreVertical className="h-4 w-4 opacity-80" />
                  </div>
                </div>

                {/* Chat Canvas */}
                <div className="p-4 sm:p-5 relative min-h-[170px] flex flex-col justify-end">
                  {/* Date chip */}
                  <div className="text-center mb-3">
                    <span className="bg-white/90 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
                      Hoje
                    </span>
                  </div>

                  {/* Message Bubble */}
                  <div className="wa-bubble-left p-3.5 shadow-sm text-slate-800 text-sm leading-relaxed">
                    <p>{item.text}</p>
                    <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                      <span>{item.time}</span>
                      <CheckCheck className="h-3.5 w-3.5 text-[#34b7f1]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

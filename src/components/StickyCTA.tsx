import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/siteData'

export default function StickyCTA() {
  const { stickyCTA } = siteConfig
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após o usuário rolar 350px
      setShow(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden border-t border-slate-200 bg-white/95 p-3 backdrop-blur-md shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
      <a
        href={stickyCTA.link}
        className="btn-direct-cta flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-black uppercase text-white shadow-md active:scale-95"
      >
        <span>{stickyCTA.text}</span>
        <ArrowRight className="h-4 w-4" strokeWidth={3} />
      </a>
      <p className="mt-1 text-center text-[10px] font-extrabold uppercase text-slate-500">
        {stickyCTA.subtext}
      </p>
    </div>
  )
}

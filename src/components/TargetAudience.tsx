import { Search, MapPin, Calculator, FileText, CheckSquare, ShieldCheck, Zap, ShoppingBag, Wrench, BatteryCharging, Cpu } from 'lucide-react'
import { siteConfig } from '../config/siteData'

export default function TargetAudience() {
  const { targetAudience } = siteConfig

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Search,
    MapPin,
    Calculator,
    FileText,
    CheckSquare,
    ShieldCheck,
    Zap,
    ShoppingBag,
    Wrench,
    BatteryCharging,
    Cpu,
  }

  return (
    <section className="px-4 py-12 sm:py-16 bg-[#f8fafc]">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight text-[#0f172a]">
          {targetAudience.title}
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {targetAudience.cards.map((card, idx) => {
            const Icon = iconMap[card.icon] || CheckSquare
            return (
              <div
                key={idx}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs hover:border-sky-300 transition-colors"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 mb-4">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

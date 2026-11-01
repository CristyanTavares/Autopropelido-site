import TopBanner from './components/TopBanner'
import Hero from './components/Hero'
import ClaritySection from './components/ClaritySection'
import InteractiveWidget from './components/InteractiveWidget'
import StudySection from './components/StudySection'
import DarkBanner from './components/DarkBanner'
import TargetAudience from './components/TargetAudience'
import BonusSection from './components/BonusSection'
import PricingOffer from './components/PricingOffer'
import WhatsAppTestimonials from './components/WhatsAppTestimonials'
import GuaranteeSection from './components/GuaranteeSection'
import AccessSteps from './components/AccessSteps'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col overflow-x-hidden">
      <TopBanner />
      <Hero />
      <ClaritySection />
      <InteractiveWidget />
      <StudySection />
      <DarkBanner />
      <TargetAudience />
      <BonusSection />
      <PricingOffer />
      <WhatsAppTestimonials />
      <GuaranteeSection />
      <AccessSteps />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  )
}

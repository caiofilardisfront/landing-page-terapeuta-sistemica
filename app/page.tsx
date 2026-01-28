import HeroSection from "@/components/hero-section"
import BioSection from "@/components/bio-section"
import MethodSection from "@/components/method-section"
import CompareSection from "@/components/compare-section"
import BenefitsSection from "@/components/benefits-section"
import OfferSection from "@/components/offer-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BioSection />
      <MethodSection />
      <CompareSection />
      <BenefitsSection />
      <OfferSection />
      <Footer />
    </main>
  )
}

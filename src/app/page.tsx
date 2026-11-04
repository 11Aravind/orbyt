import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  HeroSection, IntroStrip, BrandIntro, FeaturedProducts, ProductCategories,
  SecuritySection, DevelopmentSection, WhyOrbyt, WorkProcess, CaseStudies,
  Testimonials, FAQSection, ContactCTA
} from "@/components/HomeSections";

export default function HomePage() {
  return <>
    <Navbar />
    <main>
      <HeroSection />
      <IntroStrip />
      <BrandIntro />
      <FeaturedProducts />
      <ProductCategories />
      <SecuritySection />
      <DevelopmentSection />
      <WhyOrbyt />
      <WorkProcess />
      <CaseStudies />
      <Testimonials />
      <FAQSection />
      <ContactCTA />
    </main>
    <Footer />
  </>;
}
